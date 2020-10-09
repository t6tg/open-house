export default async function index(fastify) {
  fastify.get("/", async (req, res) => {
    res.send({ message: "Hello World" });
  });
}
