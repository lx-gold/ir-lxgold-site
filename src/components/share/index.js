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


        const services = Object.freeze(
            {
                headTag: headTag,
                ldJson: ldJson,
                siteMap: siteMap
            }
        );

        return services;
    }