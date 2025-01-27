import { IGqlContext } from '@/types';
import * as Prisma from '@prisma/client';

export const fullResponse = (
  { fullResponse }: Prisma.Generation,
  {},
  { isAdmin }: IGqlContext
) => {
  if (isAdmin) {
    return fullResponse;
  }
  return '';
};

export const payload = (
  { payload }: Prisma.Generation,
  {},
  { isAdmin }: IGqlContext
) => {
  if (isAdmin) {
    return payload;
  }
  return '';
};

export const errorMessage = (
  { errorMessage }: Prisma.Generation,
  {},
  { isAdmin }: IGqlContext
) => {
  if (isAdmin) {
    return errorMessage;
  }
  return '';
};
