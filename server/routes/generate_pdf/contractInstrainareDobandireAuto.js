const fs = require('fs');
const path = require('path');

function contractInstrainareDobandireAuto(req, res, session) {
    const htmlFilePath = path.join(__dirname, '../../../resources/html/generate_pdf/contract_instrainare_dobandire_auto.html');

    fs.readFile(htmlFilePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

module.exports = {
    contractInstrainareDobandireAuto
};