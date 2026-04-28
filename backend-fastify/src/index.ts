import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify({ logger: true });

app.register(cors);

app.get("/", async () => {
    return { message: "Olá, mundo!" };
});

const start = async () => {
    try {
        const port = Number(process.env.PORT) || 8000;
        await app.listen({ port, host: "0.0.0.0" });
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();
