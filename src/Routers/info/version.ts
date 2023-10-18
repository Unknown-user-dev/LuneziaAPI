import { Elysia } from 'elysia';

export const router_version = new Elysia()
    .get('/version', async ({ set }) => {
        set.status = 200;
        return { version_of_the_api: '0.0.1' };
    })
