import { FastifyRequest } from 'fastify';

export async function authenticate(request: FastifyRequest): Promise<void> {
  await request.jwtVerify();
}
