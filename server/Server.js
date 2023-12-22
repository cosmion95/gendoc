const routes = require('./routes/Routes');
const SessionManager = require('./sessions/SessionManager');

const express = require('express');
const cookieParser = require('cookie-parser');

const server = express();
const sessionManager = new SessionManager();
const port = 3000;

server.use(cookieParser());
server.set('view engine', 'ejs');

server.get('*', (req, res) => {
    res.setHeader('Content-Type', 'text/html');

    console.log("Request received for URL: " + req.url);

    // check if session cookie is set
    const sessionId = req.cookies.sessionId;
    let session = null;
    if (!sessionId) {
        session = sessionManager.generateSession("this_origin");
        res.cookie("sessionId", session.getId());
    } else {
        session = sessionManager.getSession(sessionId, "this_other_origin");
    }

    action = req.url;
    if (req.url.indexOf('/', 1) > -1) {
        action = req.url.substring(0, req.url.indexOf('/', 1));
    }

    const route = routes[action];
    if (route) {
        route(req, res, session);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Error: page not found');
    }
});

server.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});

