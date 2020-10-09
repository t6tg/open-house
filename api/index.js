const fastify = require("fastify");
const router = require("./router.js");
const line = require("@line/bot-sdk");
require("dotenv").config();

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

function build() {
  const app = fastify({
    logger: true,
  });
  const client = new line.Client(config);
  app.register(require("fastify-cors"));
  app.register(require("fastify-formbody"));
  app.register(router);

  return app;
}

module.exports = build;
