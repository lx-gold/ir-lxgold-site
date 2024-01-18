module.exports = function
(
    {
        modelList
    }
)
    {

        const { getAllChainByBrandAndMedal } = require('./get-all-chain-by-brand-and-medal')(
            {
                modelList: modelList
            }
        );

        const services = Object.freeze(
            {
                getAllChainByBrandAndMedal
            }
        );

        return services;
    }