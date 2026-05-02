import type { FastifyError, FastifyReply, FastifyRequest } from "fastify";

export function errorHandler(
    error: FastifyError,
    request: FastifyRequest,
    reply: FastifyReply
) {
    request.log.error(error, `Error occurred on PATH ${request.url}`);

    const statusCode = error.statusCode ?? 500;

    return reply.status(statusCode).send({
        message: statusCode >= 500 ? "Internal Server Error" : error.message,
        error: error.message || "Unknown error occurred",
    });
}
