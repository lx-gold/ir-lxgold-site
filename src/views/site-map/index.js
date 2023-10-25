const buildSiteMapPage = require('./src/sitemap');
module.exports = function
()
    {
        const siteMapPage = buildSiteMapPage();

        const services = Object.freeze(
            {
                siteMapPage
            }
        );

        return services;

    }