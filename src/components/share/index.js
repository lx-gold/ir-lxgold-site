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


        const services = Object.freeze(
            {
                headTag: headTag,
                ldJson: ldJson,
                siteMap: siteMap,
                label: label
            }
        );

        return services;
    }