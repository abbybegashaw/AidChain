/**
 * Sends a request to OpenAI's GPT-4 model and returns the response.
 * @param {string} prompt - The prompt to send to the GPT-4 model.
 * @param {boolean} [ignorePersonalization=false] - Whether to ignore personalization.
 * @param {any} [previousConversation] - The previous conversation context.
 * @returns {Promise<string>} - The generated response from GPT-4.
 */
export async function sendRequestToGPT(
  prompt: string,
  ignorePersonalization = false,
  previousConversation?: any
) {
  const apiKey = process.env.OPENAI_KEY;
  const maxTokens = 500;

  if (!apiKey) {
    throw new Error(
      'OpenAI API key is required. Make sure to set it in the environment variables or pass it as an argument.'
    );
  }

  const url = 'https://api.openai.com/v1/chat/completions';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  };

  const data = {
    model: 'gpt-3.5-turbo-0125',
    messages: [
      {
        role: 'system',
        content: 'Extract important things from contract which the both parties find super useful. If there is anything illegeal, please mention that too.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    max_tokens: maxTokens,
    temperature: 0.7,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response from OpenAI:', errorText);
      throw new Error('Failed to get a response from GPT-4.');
    }

    const responseData = await response.json();
    console.log('Response from OpenAI:', responseData);
    return responseData.choices[0].message.content.trim()
  } catch (error) {
    console.error(
      'Error communicating with OpenAI:',
      error instanceof Error ? error.message : error
    );
    throw new Error('Failed to get a response from GPT-4.');
  }
}
