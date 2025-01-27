import { getUserCredits } from '@/server/utils/user';
import { IGqlContext } from '@/types';
import * as Prisma from '@prisma/client';

export const subscription = ({
  subscriptionId,
  subscriptionEndDate,
}: Prisma.User) => {
  if (subscriptionId) {
    if (Date.now() > (subscriptionEndDate?.getTime() || 0)) {
      return { status: 'EXPIRED' };
    } else {
      return { status: 'ACTIVE' };
    }
  } else {
    return {
      status: 'NULL',
    };
  }
};

export const requestCount = ({ id }: Prisma.User) => {
  return getUserCredits({ id });
};

export const aiKey = ({ aiKey }: Prisma.User, {}, { isAdmin }: IGqlContext) => {
  if (isAdmin) {
    return aiKey;
  }
  return '';
};

//export const aiTokens = ({ aiTokens }: Prisma.User, {}, { isAdmin }: IGqlContext) => {
//  if (isAdmin) {
//    return aiTokens;
//  }
//  return "";
//}

export const systemPrompt = (
  { systemPrompt }: Prisma.User,
  {},
  { isAdmin }: IGqlContext
) => {
  if (isAdmin) return systemPrompt;
  return '';
};

export const prompt = (
  { prompt }: Prisma.User,
  {},
  { isAdmin }: IGqlContext
) => {
  if (isAdmin) return prompt;
  return '';
};
