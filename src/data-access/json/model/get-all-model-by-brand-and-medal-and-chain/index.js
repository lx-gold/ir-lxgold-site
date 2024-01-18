const buildGetAllModelByBrandAndMedalAndChain = require('./src/get-all-model-by-brand-and-medal-and-chain');

module.exports = function
(
    {
        modelList
    }
)
    {
        const getAllModelByBrandAndMedalAndChain = buildGetAllModelByBrandAndMedalAndChain(
            {
                modelList: modelList
            }

        );

        const services = Object.freeze(
            {
                getAllModelByBrandAndMedalAndChain
            }
        );

        return services;
    }