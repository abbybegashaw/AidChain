import prisma from '@/prisma/prisma';

export default async function isProjectAdmin({
  projectId,
  userId,
}: {
  projectId: string;
  userId: string;
}) {
  const project = await prisma.project.findUnique({ where: { id: projectId } });
  if (project?.createdBy !== userId) {
    throw new Error('You are not project admin');
  }
}
