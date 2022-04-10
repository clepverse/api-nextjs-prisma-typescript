import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const data = await prisma.note.findMany({
      select: {
        id: true,
        title: true,
        content: true,
      },
    });
    res.status(200).json({ data, message: 'Success' });
  } catch (error) {
    console.log('Failure', error);
  }
}
