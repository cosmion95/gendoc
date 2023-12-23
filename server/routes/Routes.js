const { contractInstrainareDobandireAuto } = require('./ContractInstrainareDobandireAuto');
const { setSessionTheme } = require('./Theme');
const { index } = require('./Index');
const { staticResource, favicon } = require('./StaticResource');

const getRoutes = {
    '/': index,
    "/favicon.ico": favicon,
    "/static": staticResource,
    '/contract_instrainare_dobandire_auto': contractInstrainareDobandireAuto
};

const postRoutes = {
    '/toggle_theme': setSessionTheme,
};

module.exports = {getRoutes, postRoutes};