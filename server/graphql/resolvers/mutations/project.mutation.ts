import { IGqlContext } from '@/types';
import { isLoggedIn } from '../../wrappers';
import prisma from '@/prisma/prisma';
import isProjectAdmin from '@/server/utils/isProjectAdmin';

export const createProject = isLoggedIn(
  async (_: unknown, { name }: { name: string }, { user }: IGqlContext) => {
    return prisma.project.create({
      data: {
        name,
        createdBy: user?.id as string,
      },
    });
  }
);

export const deleteProject = isLoggedIn(
  async (_: unknown, { id }: { id: string }, { user }: IGqlContext) => {
    isProjectAdmin({
      projectId: id,
      userId: user?.id as string,
    });
    return prisma.project.delete({
      where: { id },
    });
  }
);

export const updateGeneration = isLoggedIn(
  async (_: unknown, { id, description, name }, { user }: IGqlContext) => {
    const generation = await prisma.generation.findUnique({
      where: { id, createdBy: user?.id },
    });
    if (generation?.name === name) {
      throw new Error('A generation with same name already exists');
    }
    return prisma.generation.update({
      where: { id },
      data: {
        description,
        isSaved: true,
        name,
      },
    });
  }
);

export const deleteGeneration = isLoggedIn(
  async (_: unknown, { id }: { id: string }) => {
    return prisma.generation.delete({
      where: { id },
    });
  }
);
