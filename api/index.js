const fastify = require("fastify");

function build() {
  const app = fastify({
    logger: true,
  });

  app.get("/uri", async (req, res) => {
    return { status: "ok" };
  });

  return app;
}

module.exports = build;
