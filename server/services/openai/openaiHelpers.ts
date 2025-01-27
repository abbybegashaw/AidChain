import * as Prisma from '@prisma/client';
import { mailError } from '../email';
import reportDiscord from '../../../utils/reportDiscord';

export interface IOpenAICallDefault {
  api_key: string;
  max_tokens: number;
  model: string;
  temperature: number;
}

async function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export const trackLog = async (eventName: string, trackData: any) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      eventName,
      trackData,
      token: process.env.MIXPANEL_SYSTEM_TOKEN,
    }),
  };
  await fetch(
    (process.env.APP_URL as string) + '/api/edge-helper/track',
    options
  );
};

export const getRequestData = (
  {
    user,
    customerPrompt: customer_prompt,
    systemPrompt: system_prompt,
    imageFiles: image_files,
  }: {
    user: Prisma.User;
    customerPrompt: string;
    systemPrompt?: string;
    imageFiles?: string[];
  },
  DEFAULTS: IOpenAICallDefault
) => {
  const api_key = user.aiKey || DEFAULTS.api_key;
  const MAX_TOKENS = user?.aiTokens
    ? parseInt(user?.aiTokens + '')
    : DEFAULTS.max_tokens;
  const MODEL = user?.aiModel || DEFAULTS.model;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${api_key}`,
  };

  const user_message: any = {
    role: 'user',
    content: [
      {
        type: 'text',
        text: customer_prompt,
      },
    ],
  };

  const system_message: any = {
    role: 'system',
    content: [
      {
        type: 'text',
        text: system_prompt,
      },
    ],
  };

  if (image_files) {
    for (const encoded_image of image_files) {
      const image_json = {
        type: 'image_url',
        image_url: {
          url: `${encoded_image}`,
          detail: 'low',
        },
      };
      user_message['content'].push(image_json);
    }
  }

  const messages = system_prompt
    ? [system_message, user_message]
    : [user_message];

  const payload = {
    model: MODEL,
    messages: messages,
    temperature: user?.aiTemperature
      ? parseFloat(user?.aiTemperature)
      : DEFAULTS.temperature,
    max_tokens: MAX_TOKENS,
  };
  return { payload, headers };
};

export async function request(
  headers: HeadersInit,
  payload: any,
  retry?: number
) {
  try {
    const req = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        ...headers,
      },
      body: JSON.stringify(payload),
    });
    const response = await req.json();
    //const result = response.choices?.[0]?.message?.content;
    if (response?.error?.code === 'rate_limit_exceeded') {
      throw new Error('rate_limit_exceeded');
    }
    return response;
  } catch (error: any) {
    if (error.message === 'rate_limit_exceeded' && (retry || 0) <= 4) {
      mailError({
        errMessage: 'Limit exceeded, now retrying (' + (retry || 0) + '): ',
      });
      await wait(30000 + Math.random() * 100);
      return request(headers, payload, retry ? retry + 1 : 1);
    } else if (error.message === 'rate_limit_exceeded') {
      mailError({ errMessage: 'Retry limit exceeded: ' });
      reportDiscord({
        isError: true,
        error: new Error('Limit exceeded, now retrying'),
        errorDetails: payload,
      });
    }
    if (error) {
      reportDiscord({
        isError: true,
        error: error,
        errorDetails: payload,
      });
    }

    mailError({ errMessage: error.message });
    return {
      error: true,
      errorMessage: error.message,
    };
  }
}
