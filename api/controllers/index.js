const line = require("@line/bot-sdk");
require("dotenv").config();

const client = new line.Client(config);

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};
export default async function index(fastify) {
  fastify.post("/link-richmenu", async (req, res) => {
    const { userId } = req.body;
    client.linkRichMenuToUser(
      userId,
      "richmenu-53012715ee822676ac82c99611d2245c"
    );
  });
}
