const buildGetAllRingByBrandAndMedalAndChain = require('./src/get-all-ring-by-brand-and-medal-and-chain');

module.exports = function
(
    {
        modelList
    }
)
    {
        const getAllRingByBrandAndMedalAndChain = buildGetAllRingByBrandAndMedalAndChain(
            {
                modelList:modelList
            }

        );

        const services = Object.freeze(
            {
                getAllRingByBrandAndMedalAndChain
            }
        );

        return services;
    }