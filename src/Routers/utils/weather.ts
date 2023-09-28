import { Elysia } from 'elysia';
import axios from 'axios';

export const router_weather = new Elysia()
    .get('/weather', async ({ query, set }) => {
        try {
            const cityName = query.q;

            if (!cityName) {
                set.status = 400;
                return { error: 'Veuillez fournir le nom de la ville dans la requête.' };
            }

            const options = {
                method: 'GET',
                url: 'https://openweather43.p.rapidapi.com/weather',
                params: {
                    q: cityName,
                    appid: ['da0f9c8d90bde7e619c3ec47766a42f4', 'da0f9c8d90bde7e619c3ec47766a42f4'],
                    units: 'standard'
                },
                headers: {
                    'X-RapidAPI-Key': '9418460cb7mshb865ac691ff538bp164aadjsn76d08f076455',
                    'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
                }
            };

            const response = await axios.request(options);

            if (response.status === 200) {
                set.status = 200;
                return response.data;
            } else {
                set.status = 500;
                return { error: 'Erreur lors de la récupération des données météorologiques.' };
            }
        } catch (error) {
            set.status = 500;
            return { error: 'Une erreur s\'est produite lors de la récupération des données météorologiques.' };
        }
    });
