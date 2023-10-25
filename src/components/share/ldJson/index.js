const buildWebPageLdJson = require('./webPage/webPageLdJson');

module.exports = function
()
    {
        const webPageLdJson = buildWebPageLdJson();

        const services = Object.freeze(
            {
                webPage: webPageLdJson
            }
        );

        return services;
    }