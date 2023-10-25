const buildGetAllMedalByBrand = require('./src/get-all-medal-by-brand');

module.exports = function
(
    {
        getAllModel
    }
)
    {
        const getAllMedalByBrand = buildGetAllMedalByBrand(
            {
                getAllModel:getAllModel
            }

        );

        const services = Object.freeze(
            {
                getAllMedalByBrand
            }
        );

        return services;
    }