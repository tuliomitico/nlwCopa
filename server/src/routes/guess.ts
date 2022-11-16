import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma';
import { authenticate } from '../plugins/authenticate';

export async function guessRoutes(fastify: FastifyInstance): Promise<void> {
  fastify.get('/guesses/count', async () => {
    const count = await prisma.guess.count();
    return { count };
  });

  fastify.post(
    'pools/:poolId/games/:gameId/guesses',
    { onRequest: [authenticate] },
    async (request, reply) => {
      const createGuessParams = z.object({
        poolId: z.string(),
        gameId: z.string(),
      });
      const creaGuessBody = z.object({
        firstTeamPoints: z.number(),
      });
      const { gameId, poolId } = createGuessParams.parse(request.params);

      // Aula 4 - hora 1 minuto 13 segundo 40
    },
  );
}
