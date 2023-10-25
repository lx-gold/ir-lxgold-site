const buildGetAllRingByBrandAndMedalAndChain = require('./src/get-all-ring-by-brand-and-medal-and-chain');

module.exports = function
(
    {
        getAllModel
    }
)
    {
        const getAllRingByBrandAndMedalAndChain = buildGetAllRingByBrandAndMedalAndChain(
            {
                getAllModel:getAllModel
            }

        );

        const services = Object.freeze(
            {
                getAllRingByBrandAndMedalAndChain
            }
        );

        return services;
    }