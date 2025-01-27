import * as Prisma from '@prisma/client';
import { mailError } from '../email';
import reportDiscord from '../../../utils/reportDiscord';
import {
  IOpenAICallDefault,
  getRequestData,
  request,
  trackLog,
} from './openaiHelpers';
import {
  extractFeatures,
  generateDescription,
  improveDescription,
} from './pipelineFunctions';
import AppError from '@/utils/AppError';
import { APP_GENERATE_ERROR } from '@/constants';
import {
  DESCRIPTION_GENERATED,
  GENERATE_ERROR,
  PIPELINE_RESPONSE_STEP_EXTRACT,
  PIPELINE_RESPONSE_STEP_GENERAL_DESCRIPTION,
  PIPELINE_RESPONSE_STEP_USER_DESCRIPTION,
} from '@/server/constants/track';

export const DEFAULTS: IOpenAICallDefault = {
  api_key: "",
  max_tokens: 4096,
  model: 'gpt-4o',
  temperature: 0.5,
};

export async function callAI(
  imageFiles: string[],
  customerPrompt: string,
  systemPrompt: string,
  user: Prisma.User,
  propertyFeatures: string
) {
  try {
    // Request 1 - Extract features from images
    const featuresResponse = await extractFeatures({
      imageFiles,
      user,
      propertyFeatures,
    });

    if (featuresResponse.error) {
      throw new AppError(featuresResponse.error.message, APP_GENERATE_ERROR, {
        details: featuresResponse.error,
        otherData: {
          payload: [featuresResponse.payload],
          fullResponse: [featuresResponse.fullResponse],
        },
      });
    } else {
      trackLog(PIPELINE_RESPONSE_STEP_EXTRACT, featuresResponse as any);
    }

    // Request 2 - Create description using the features
    const descriptionResponse = await generateDescription({
      user,
      features: featuresResponse.response as string,
    });
    if (descriptionResponse.error) {
      throw new AppError(
        descriptionResponse.error.message,
        APP_GENERATE_ERROR,
        {
          details: descriptionResponse.error,
          otherData: {
            payload: [featuresResponse.payload, descriptionResponse.payload],
            fullResponse: [
              featuresResponse.fullResponse,
              descriptionResponse.fullResponse,
            ],
          },
        }
      );
    } else {
      trackLog(
        PIPELINE_RESPONSE_STEP_GENERAL_DESCRIPTION,
        descriptionResponse as any
      );
    }

    // Request 3 - Generate final improved description
    const finalDescription = await improveDescription({
      user,
      description: descriptionResponse.response as string,
    });
    if (finalDescription.error) {
      throw new AppError(finalDescription.error.message, APP_GENERATE_ERROR, {
        details: finalDescription.error,
        otherData: {
          payload: [
            featuresResponse.payload,
            descriptionResponse.payload,
            finalDescription.payload,
          ],
          fullResponse: [
            featuresResponse.fullResponse,
            descriptionResponse.fullResponse,
            finalDescription.payload,
          ],
        },
      });
    } else {
      trackLog(
        PIPELINE_RESPONSE_STEP_USER_DESCRIPTION,
        finalDescription as any
      );
    }

    const payload = [
      featuresResponse.payload,
      descriptionResponse.payload,
      finalDescription.payload,
    ];
    const fullResponse = [
      featuresResponse.fullResponse,
      descriptionResponse.fullResponse,
      finalDescription.fullResponse,
    ];

    const response = {
      response: finalDescription.response,
      payload,
      fullResponse,
    };

    trackLog(DESCRIPTION_GENERATED, response as any);
    reportDiscord({
      message: DESCRIPTION_GENERATED + ` by ${user.email}`,
      messageDetails: response as any,
    });

    return {
      response: finalDescription.response,
      payload,
      fullResponse,
    };
  } catch (error: unknown) {
    if ((error as AppError).type === APP_GENERATE_ERROR) {
      const appError: AppError = error as AppError;
      const errorDetails = {
        error: ((appError.data as any)?.details as Error).message,
        payload: (appError.data as any)?.payload,
        fullResponse: (appError.data as any)?.fullResponse,
      };
      trackLog(GENERATE_ERROR, errorDetails);
      reportDiscord({
        errorDetails,
        isError: true,
        error: appError,
      });
      return {
        fullResponse: (appError.data as any)?.fullResponse,
        payload: (appError.data as any)?.payload,
        error: true,
        errorMessage: appError.message,
      };
    } else {
      trackLog(GENERATE_ERROR, {
        errorMessage: (error as Error).message,
      });
      return {
        error: true,
        errorMessage: (error as Error).message || 'unknown error',
      };
    }
  }
}
