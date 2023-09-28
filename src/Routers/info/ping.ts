import Elysia from "elysia";

export const router_ping = new Elysia()
    .get('/ping', async ({ set }) => {
        set.status = 200;
        return {uptime: process.uptime() };
    })
