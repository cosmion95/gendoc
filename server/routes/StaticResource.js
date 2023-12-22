const fs = require('fs');
const path = require('path');

function staticResource(req, res, session) {
    const filePath = path.join(__dirname, 'public', "../../../resources" + req.url.substring(7));

    console.log("Reading static resource: " + filePath);
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.log("Error reading static resource: " + err);
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            return;
        }

        console.log("Serving static resource: " + filePath);
        res.writeHead(200, { 'Content-Type': getContentType(filePath) });

        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    });
}


module.exports = {
    staticResource
};

function getContentType(filePath) {
    const extname = path.extname(filePath);
    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'application/javascript';
        case '.pdf':
            return 'application/pdf';
        case '.ttf':
            return 'font/ttf';
        default:
            return 'application/octet-stream';
    }
}