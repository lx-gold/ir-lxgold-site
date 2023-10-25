const buildGetAllModelByBrandAndMedalAndChainAndRing = require('./src/get-all-model-by-brand-and-medal-and-chain-and-ring');

module.exports = function
(
    {
        getAllModel
    }
)
    {
        const getAllModelByBrandAndMedalAndChainAndRing = buildGetAllModelByBrandAndMedalAndChainAndRing(
            {
                getAllModel: getAllModel
            }

        );

        const services = Object.freeze(
            {
                getAllModelByBrandAndMedalAndChainAndRing
            }
        );

        return services;
    }