const buildHeader = require('./header/src/header-html');

module.exports = function
(
    {
        cssPath
    }
)
    {

        const  headTag  = require('./head')(
            {
                cssPath : cssPath
            }
        )

        const ldJson = require('./ldJson')();

        const siteMap = require('./sitemap')();

        const label = require('./label')();

        const header = require('./header')()


        const services = Object.freeze(
            {
                headTag: headTag,
                ldJson: ldJson,
                siteMap: siteMap,
                label: label,
                header: header
            }
        );

        return services;
    }