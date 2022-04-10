import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const noteId = req.query.id;

  if (req.method === 'DELETE') {
    const note = await prisma.note.delete({
      where: {
        id: Number(noteId),
      },
    });
    res.json({ note, message: 'Success' });
  } else if (req.method === 'GET') {
    const note = await prisma.note.findUnique({
      where: {
        id: Number(noteId),
      },
    });
    if (note) {
      res.json({ note, message: 'Success' });
    } else {
      res.json({ note, message: 'Note could not be exist' });
    }
  } else {
    console.log('Note could not be created');
  }
}
