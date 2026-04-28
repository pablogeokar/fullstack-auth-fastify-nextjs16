import Fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";

const app = Fastify({ logger: true });

app.register(cors, {
    origin: process.env.APP_ORIGIN!,
    credentials: true,
});
app.register(cookie);

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
