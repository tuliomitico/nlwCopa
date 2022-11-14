import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';

export async function guessRoutes(fastify: FastifyInstance): Promise<void> {
  fastify.get('/guesses/count', async () => {
    const count = await prisma.guess.count();
    return { count };
  });
}
