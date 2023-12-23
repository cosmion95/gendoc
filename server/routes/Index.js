const { sessionManager } = require('../sessions/SessionManager');

function index(req, res) {
    console.log(sessionManager);
    const data = {
        "session_theme": sessionManager.getRequestSession(req, res).getTheme() === true ? "light" : "dark"
    };

    res.render("index", data);
}

module.exports = {
    index
};