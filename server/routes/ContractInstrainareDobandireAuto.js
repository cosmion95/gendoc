const { sessionManager } = require('../sessions/SessionManager');

function contractInstrainareDobandireAuto(req, res) {
    const data = {
        "session_theme": sessionManager.getRequestSession(req, res).getTheme() === true ? "light" : "dark"
    };

    res.render("contract_instrainare_dobandire_auto", data);
}

module.exports = {
    contractInstrainareDobandireAuto
};