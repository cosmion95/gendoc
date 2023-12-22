const fs = require('fs');
const path = require('path');

function index(req, res, session) {
    const data = {
        "session_theme": session.getTheme() === true ? "light" : "dark"
    };

    res.render("index", data);
}

module.exports = {
    index
};