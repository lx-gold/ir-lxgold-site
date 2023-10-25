const buildGetAllModelByBrandAndMedalAndChain = require('./src/get-all-model-by-brand-and-medal-and-chain');

module.exports = function
(
    {
        getAllModel
    }
)
    {
        const getAllModelByBrandAndMedalAndChain = buildGetAllModelByBrandAndMedalAndChain(
            {
                getAllModel: getAllModel
            }

        );

        const services = Object.freeze(
            {
                getAllModelByBrandAndMedalAndChain
            }
        );

        return services;
    }