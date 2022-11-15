import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import * as dotenv from 'dotenv';

import { poolRoutes } from './routes/pool';
import { guessRoutes } from './routes/guess';
import { userRoutes } from './routes/user';
import { gameRoutes } from './routes/game';
import { authRoutes } from './routes/auth';

dotenv.config();

async function bootstrap(): Promise<void> {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(jwt, {
    secret: process.env.JWT_SECRET ?? '',
  });

  await fastify.register(authRoutes);
  await fastify.register(gameRoutes);
  await fastify.register(guessRoutes);
  await fastify.register(poolRoutes);
  await fastify.register(userRoutes);

  await fastify.listen({ port: 3333, host: '0.0.0.0' });
}

void bootstrap();
