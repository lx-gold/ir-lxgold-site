const buildGetAllMedalByBrand = require('./src/get-all-medal-by-brand');

module.exports = function
(
    {
        modelList
    }
)
    {
        const getAllMedalByBrand = buildGetAllMedalByBrand(
            {
                modelList:modelList
            }

        );

        const services = Object.freeze(
            {
                getAllMedalByBrand
            }
        );

        return services;
    }