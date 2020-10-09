const fastify = require("fastify");
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
  app.post("api/v1/register", async (req, res) => {
    const { userId } = req.body;
    client.linkRichMenuToUser(
      userId,
      "richmenu-53012715ee822676ac82c99611d2245c"
    );
  });
  app.register(require("fastify-cors"));
  app.register(require("fastify-formbody"));

  return app;
}

module.exports = build;
