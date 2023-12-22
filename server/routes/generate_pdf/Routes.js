const { index } = require('./index');
const { contractInstrainareDobandireAuto } = require('./contractInstrainareDobandireAuto');

const routes = {
    '/generate_pdf': index,
    '/contract_instrainare_dobandire_auto': contractInstrainareDobandireAuto
};

function generatePdf(req, res, session) {
    console.log("Generate PDF request for URL: " + req.url);

    action = req.url;
    if (req.url.indexOf('/', 1) > -1) {
        action = req.url.substring(req.url.indexOf('/', 1));
    }

    const route = routes[action];
    if (route) {
        route(req, res, session);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Error: generate page not found');
    }
}

module.exports = {
    generatePdf
};

