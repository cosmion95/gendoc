const { generatePdf } = require('./generate_pdf/Routes');
const { staticResource } = require('./StaticResource');
const { setSessionTheme } = require('./Theme');

const routes = {
    '/generate_pdf': generatePdf,
    '/static': staticResource,
    '/toggle_theme': setSessionTheme,
};

module.exports = routes;