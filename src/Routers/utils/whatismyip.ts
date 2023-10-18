import { Elysia } from 'elysia';

export const router_whatismyip = new Elysia()
    .get('/whatismyip', async ({ set, request }) => {
        const response = await fetch('https://api.ipify.org?format=json');
        const json = await response.json();
        set.status = 200;
        return { ip: json.ip };
    });
