import Fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";
import { config } from "./config/app.config.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = Fastify({ logger: true });
const BASE_PATH = config.BASE_PATH;

app.register(cors, {
    origin: config.APP_ORIGIN,
    credentials: true,
});
app.register(cookie);

app.setErrorHandler(errorHandler);

app.post("/", async () => {
    return { message: "Olá, mundo!" };
});

const start = async () => {
    try {
        const port = Number(config.PORT);
        await app.listen({ port, host: "0.0.0.0" });
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();
