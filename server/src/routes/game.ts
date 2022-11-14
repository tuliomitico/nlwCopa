import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';

export async function gameRoutes(fastify: FastifyInstance): Promise<void> {
  fastify.get('/games/count', async () => {
    const count = await prisma.game.count();
    return { count };
  });
}
