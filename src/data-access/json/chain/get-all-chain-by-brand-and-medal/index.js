const buildGetAllChainByBrandAndMedal = require('./src/get-all-chain-by-brand-and-medal');

module.exports = function
(
    {
        getAllModel
    }
)
    {
        const getAllChainByBrandAndMedal = buildGetAllChainByBrandAndMedal(
            {
                getAllModel:getAllModel
            }

        );

        const services = Object.freeze(
            {
                getAllChainByBrandAndMedal
            }
        );

        return services;
    }