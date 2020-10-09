export default async function index(fastify) {
  fastify.get("/link-richmenu", async (req, res) => {
    res.send({ message: "Hello World" });
  });
}
