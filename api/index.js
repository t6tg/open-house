const fastify = require("fastify");
const router = require("./router.js");

function build() {
  const app = fastify({
    logger: true,
  });

  app.register(require("fastify-cors"));
  app.register(require("fastify-formbody"));
  app.register(router, { prefix: "/api/v1" });

  return app;
}

module.exports = build;
