const config = require('./Config');
const { getRoutes, postRoutes } = require('./routes/Routes');

const express = require('express');
const cookieParser = require('cookie-parser');

const server = express();

server.use(cookieParser());
server.set('view engine', 'ejs');

server.get('*', (req, res) => {
    console.log("GET request received for URL: " + req.url);
    res.setHeader('Content-Type', 'text/html');

    action = req.url;
    if (req.url.indexOf('/', 1) > -1) {
        action = req.url.substring(0, req.url.indexOf('/', 1));
    }

    const route = getRoutes[action];
    if (route) {
        route(req, res);
    } else {
        console.log("Unable to identify GET route: " + req.url);
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Error: page not found');
    }
});

server.post("*", (req, res) => {
    console.log("POST request received for URL: " + req.url);
    const route = postRoutes[req.url];
    if (route) {
        route(req, res);
    } else {
        console.log("Unable to identify POST route: " + req.url);
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Error: page not found');
    }
});

server.listen(config.port, () => {
    console.log(`Server is running at ${config.ipAddress}:${config.port}`);
});