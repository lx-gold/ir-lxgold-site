module.exports = function
(
    {
        getAllModel
    }
)
    {

        const { getAllChainByBrandAndMedal } = require('./get-all-chain-by-brand-and-medal')(
            {
                getAllModel: getAllModel
            }
        );

        const services = Object.freeze(
            {
                getAllChainByBrandAndMedal
            }
        );

        return services;
    }