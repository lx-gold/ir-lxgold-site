const buildGetAllChainByBrandAndMedal = require('./src/get-all-chain-by-brand-and-medal');

module.exports = function
(
    {
        modelList
    }
)
    {
        const getAllChainByBrandAndMedal = buildGetAllChainByBrandAndMedal(
            {
                modelList:modelList
            }

        );

        const services = Object.freeze(
            {
                getAllChainByBrandAndMedal
            }
        );

        return services;
    }