import { IGqlContext } from '@/types';
import { adminOnly, isLoggedIn } from '../../wrappers';
import prisma from '@/prisma/prisma';

export const myProjects = isLoggedIn(
  (_: unknown, { id }: { id?: string }, { user }: IGqlContext) => {
    return prisma.project.findMany({
      where: { createdBy: user?.id as string, id },
      select: {
        createdBy: true,
        name: true,
        createdAt: true,
        id: true,
        generations: true,
      },
    });
  }
);

export const myGenerations = isLoggedIn(
  (_: unknown, _2: unknown, { user }: IGqlContext) => {
    return prisma.generation.findMany({
      where: { createdBy: user?.id },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
);

export const adminGenerations = adminOnly(
  (_: unknown, { hasError, userId }) => {
    return prisma.generation.findMany({
      where: {
        ...(hasError && {
          errorMessage: {
            not: null,
          },
        }),
        userId,
      },
      take: 1000,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
);
