const { sessionManager } = require('../sessions/SessionManager');

function setSessionTheme(req, res,) {
    var session = sessionManager.getRequestSession(req, res);
    session.toggleTheme();

    res.status(204).end();
}

module.exports = {
    setSessionTheme
};

