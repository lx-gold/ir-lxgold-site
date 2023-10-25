module.exports = function
(
    {
        getAllModel
    }
)
    {

        const { getAllRingByBrandAndMedalAndChain } = require('./get-all-ring-by-brand-and-medal-and-chain')(
            {
                getAllModel: getAllModel
            }
        );

        const services = Object.freeze(
            {
                getAllRingByBrandAndMedalAndChain
            }
        );

        return services;
    }