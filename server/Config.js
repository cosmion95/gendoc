const ip = require('ip');

const ipAddress = ip.address();
const port = 3000;

module.exports = {ipAddress, port};