import prisma from '@/prisma/prisma';
import { IGqlContext } from '@/types';
import { isLoggedIn } from '../../wrappers';
import { callAI } from '@/server/services/openai/index';
import { sign } from 'jsonwebtoken';
import saveImages from '@/server/utils/saveImages';

export const user = (_: unknown, args: unknown, { user }: IGqlContext) => {
  return user;
};

export const users = () => {
  return prisma.user.findMany({});
};

export const contracts = isLoggedIn(async (_:unknown,{ folder }: { folder: string }, { user }: IGqlContext) => {
  if (folder === "inbox") {
    return prisma.contract.findMany({
      where: { sendTo: user?.email as string }
    });
  }
  else if (folder === "completed") {
    return prisma.contract.findMany({
      where: {
        sendTo: user?.email as string,
        status: "SIGNED",
        contractEndDate: {
          lte: new Date()
        }
      }
    });
  }
  else if (folder === "action_required") {
    return prisma.contract.findMany({
      where: {
        sendTo: user?.email as string,
        status: "SENT",
      }
    });
  }
  else {
    return prisma.contract.findMany({
      where: {
        userId: user?.id as string
      }
    });
  }
});

export const getContract = (_: unknown, { id }: { id: string }) => {
  return prisma.contract.findFirst({
    where: { id },
    include: {
      comments: {
        include: {
          user: true,
        }
      }
    }
  });
}
