import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';

export async function authRoutes(fastify: FastifyInstance): Promise<void> {
  fastify.get('/auth/count', async () => {
    const count = await prisma.pool.count();
    return { count };
  });
}
