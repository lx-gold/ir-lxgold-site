module.exports = function
(
    {
        modelList
    }
)
    {

        const { getAllRingByBrandAndMedalAndChain } = require('./get-all-ring-by-brand-and-medal-and-chain')(
            {
                modelList: modelList
            }
        );

        const services = Object.freeze(
            {
                getAllRingByBrandAndMedalAndChain
            }
        );

        return services;
    }