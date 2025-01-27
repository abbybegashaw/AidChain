import * as Prisma from '@prisma/client';
import { DEFAULTS } from '.';
import { getRequestData, request } from './openaiHelpers';
import {
  replaceDescription,
  replaceFeatures,
} from '../../utils/replaceFeature';
import {
  EXTRACT_FEATURES_PROMPT,
  GENERATE_DESCRIPTION_USING_FEATURES_PROMPT,
  IMPROVE_GENERATED_DESCRIPTION,
} from '../../../constants/prompts';

export interface IExtractFeatureArgs {
  imageFiles: string[];
  user: Prisma.User;
  propertyFeatures: string;
}

export interface IPipelineOutput {
  response?: string;
  fullResponse?: unknown;
  payload: unknown;
  error?: Error;
  other?: unknown;
}

export const extractFeatures = async ({
  imageFiles,
  user,
  propertyFeatures,
}: IExtractFeatureArgs): Promise<IPipelineOutput> => {
  let requestPayload: unknown;
  try {
    const { payload, headers } = getRequestData(
      {
        user,
        customerPrompt: replaceFeatures(
          EXTRACT_FEATURES_PROMPT,
          propertyFeatures
        ),
        imageFiles,
      },
      DEFAULTS
    );

    requestPayload = payload;

    const response = await request(headers, payload);
    const generation = response.choices?.[0]?.message?.content;
    const tagPattern = /### THEAH FEATURES ###(.*?)### END ###/;
    const matches = generation.match(tagPattern);
    const features = matches
      ? matches[1].trim()
      : 'No features could be found.';

    if (response.error) {
      // todo: handle error
      return {
        error: new Error(response.error),
        fullResponse: response,
        payload,
      };
    } else {
      return {
        payload,
        fullResponse: response,
        response: features,
      };
    }
  } catch (error: unknown) {
    return {
      error: error as Error,
      fullResponse: null,
      payload: requestPayload,
    };
  }
};

export const generateDescription = async ({
  features,
  user,
}: {
  features: string;
  user: Prisma.User;
}): Promise<IPipelineOutput> => {
  let payload;
  try {
    const { payload: requestPayload, headers } = getRequestData(
      {
        user,
        customerPrompt: replaceFeatures(
          GENERATE_DESCRIPTION_USING_FEATURES_PROMPT,
          features
        ),
      },
      DEFAULTS
    );
    payload = requestPayload;

    const response = await request(headers, payload);
    const pattern = /### GENERIC DESCRIPTION ###(.*?)### END ###/;
    const generation = response.choices[0]?.message?.content;
    const matches = generation.match(pattern);
    const description = matches
      ? matches[1].trim()
      : 'No description could be found.';
    return {
      payload,
      response: description,
      fullResponse: response,
    };
  } catch (error: unknown) {
    return {
      error: error as Error,
      payload,
    };
  }
};

export const improveDescription = async ({
  user,
  description: previousGeneration,
}: {
  user: Prisma.User;
  description: string;
}) => {
  let payload;
  try {
    const prompt = replaceDescription(
      IMPROVE_GENERATED_DESCRIPTION,
      user,
      previousGeneration
    );
    const { payload: requestPayload, headers } = getRequestData(
      {
        customerPrompt: prompt,
        user,
      },
      DEFAULTS
    );
    payload = requestPayload;
    const response = await request(headers, payload);
    const pattern = /### THEAH DESCRIPTION ###(.*?)### END ###/;
    const generation = response.choices?.[0]?.message?.content;
    const matches = generation.match(pattern);
    const description = matches
      ? matches[1].trim()
      : 'No description could be found.';

    return {
      response: description,
      fullResponse: response,
      payload,
    };
  } catch (error: unknown) {
    return {
      error: error as Error,
      payload,
    };
  }
};
