const buildHeaderHtml = require('./src/header-html');
const buildHeaderAmp = require('./src/header-amp');

module.exports = function
()
    {
        const headerHtml = buildHeaderHtml();
        const headerAmp = buildHeaderAmp();

        const services = Object.freeze(
            {
                html: headerHtml,
                amp: headerAmp,
            }
        );

        return services;
    }