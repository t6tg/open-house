import indexRoute from "./controllers/index";
export default async function router(fastify) {
  fastify.register(indexRoute, { prefix: "/" });
}
