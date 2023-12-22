function setSessionTheme(req, res, session) {
   session.toggleTheme();
}

module.exports = {
    setSessionTheme
};

