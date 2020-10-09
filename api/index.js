const fastify = require("fastify");
const router = require("./router.js");
function build() {
  const app = fastify({
    logger: true,
  });
  app.register(router);
  return app;
}

module.exports = build;
