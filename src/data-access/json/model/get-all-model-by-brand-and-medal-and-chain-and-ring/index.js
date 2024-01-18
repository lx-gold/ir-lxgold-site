const buildGetAllModelByBrandAndMedalAndChainAndRing = require('./src/get-all-model-by-brand-and-medal-and-chain-and-ring');

module.exports = function
(
    {
        modelList
    }
)
    {
        const getAllModelByBrandAndMedalAndChainAndRing = buildGetAllModelByBrandAndMedalAndChainAndRing(
            {
                modelList: modelList
            }

        );

        const services = Object.freeze(
            {
                getAllModelByBrandAndMedalAndChainAndRing
            }
        );

        return services;
    }