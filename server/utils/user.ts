import prisma from '@/prisma/prisma';

export const getUserCredits = async ({ id, token }: any) => {
  try {
    let user: any;
    if (token) {
      const userRequest: any = await fetch(
        (process.env.APP_URL as string) + '/api/edge-helper/user',
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        }
      );
      const response = await userRequest.json();
      user = response.user;
    } else {
      user = await prisma.user.findUnique({ where: { id } });
    }

    if (!user?.subscriptionId) {
      return user?.requestCount;
    }

    if (typeof user?.tokenExpiryDate !== 'undefined' && user?.tokenExpiryDate) {
      return Date.now() >= new Date(user?.tokenExpiryDate)?.getTime()
        ? 0
        : user.requestCount;
    } else {
      return user?.requestCount;
    }
  } catch (err) {
    return 0;
  }
};
