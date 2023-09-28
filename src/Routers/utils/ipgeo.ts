import { Elysia } from 'elysia';

export const router_ipgeo = new Elysia()
    .get('/ipgeo', async ({ query }) => {
        try {
            const ip = query.ip;
            const response = await fetch(`http://ip-api.com/json/${ip}`);

            if (response.ok) {
                const json = await response.json();
                return json;
            } else {
                return { error: 'Error on fetch to try to have information about geoip' };
            }
        } catch (error) {
            return { error: 'An error occurred while retrieving IP geolocation data.' };
        }
    });
