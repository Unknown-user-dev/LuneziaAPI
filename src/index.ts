import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'

/*
Here we import the routers
 */
import { router_ping } from './Routers/info/ping'
import { router_ipgeo } from "./Routers/utils/ipgeo";
import { router_whatismyip } from "./Routers/utils/whatismyip";
import { router_version } from "./Routers/info/version";
/*
Here we create the app
 */

const app = new Elysia()

app.group('/api', app => app
    .use(html())
    .get('/', () => `
<!DOCTYPE html>
<html>
<head>
    <title>Elysia</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #333;
            margin: 0;
            padding: 20px;
            color: #333;
        }

        h1, h2, h3 {
            color: #333;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            margin-bottom: 10px;
        }

        a {
            color: #0066cc;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        h2 a {
            color: #0066cc;
            font-weight: bold;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background: linear-gradient(45deg, #959595, #b08abf 50%, #5b5454);
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .api-info {
            text-align: center;
            margin-bottom: 30px;
        }

        .api-version {
            font-weight: bold;
            color: #333;
        }

        .endpoint-list {
            margin-top: 20px;
        }

        .endpoint-list li {
            background-color: #f9f9f9;
            padding: 10px;
            border-radius: 5px;
        }

        .endpoint-list li a {
            color: #333;
            font-weight: bold;
        }

        .endpoint-list li a:hover {
            text-decoration: underline;
        }

        /* Ajout de styles pour améliorer l'ergonomie */
        details {
            background-color: transparent;
            border: none;
            cursor: default;
        }

        summary {
            cursor: pointer;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>Lunezia</h1>
    <div class="api-info">
        <h2>About the API</h2>
        <p class="api-version">POWERFUL - API</p>
        <p>Version : 0.0.1</p>
    </div>
    <h3>List of all endpoints :</h3>
    <div class="endpoint-list">
        <h2>Utils <a href="http://localhost:8080/api/utils">(/api/utils)</a></h2>
        <ul>
            <li>
                <a href="/api/utils/whatismyip">What is my IP ?</a>
                <details>
                    <summary>Information</summary>
                    <p>This endpoint returns the IP address of the client making the request.</p>
                </details>
            </li>
            <li>
                <a href="/api/utils/ipgeo">IP Geo</a>
                <details>
                    <summary>Information</summary>
                    <p>This endpoint provides geolocation information for a given IP address.</p>
                    <h2>How to use ? :</h2>
                    <p>http://localhost:8080/api/utils/ipgeo?ip=your_ip/any_ip</p>
                </details>
            </li>
        </ul>
    </div>
    <div class="endpoint-list">
        <h2>Info <a href="http://localhost:8080/api/info">(/api/info)</a></h2>
        <ul>
            <li>
                <a href="/api/info/version">Version</a>
                <details>
                    <summary>Information</summary>
                    <p>This endpoint returns the current version of the API.</p>
                </details>
            </li>
            <li>
                <a href="/api/info/ping">Ping</a>
                <details>
                    <summary>Information</summary>
                    <p>This endpoint is used to check API availability and responsiveness.</p>
                </details>
            </li>
        </ul>
    </div>
</div>
</body>
</html>

    `),
)


app.group('/api/utils', app => app
    .use(router_ipgeo)
    .use(router_whatismyip)
)

app.group('/api/img', app => app
)

app.group('/api/info', app => app
    .use(router_version)
    .use(router_ping),
)





app.listen(8080)
console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`)