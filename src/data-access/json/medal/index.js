module.exports = function
(
    {
        modelList
    }
)
    {

        const { getAllMedalByBrand } = require('./get-all-medal-by-brand')(
            {
                modelList: modelList
            }
        );

        const services = Object.freeze(
            {
                getAllMedalByBrand
            }
        );

        return services;
    }