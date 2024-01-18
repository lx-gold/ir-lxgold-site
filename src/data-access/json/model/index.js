module.exports = function
()
    {

        const { getAllModel } = require('./get-all-model')();

        const modelList= getAllModel();

        const { getAllModelByBrand } = require('./get-all-model-by-brand')(
            {
                modelList: modelList
            }
        )

        const { getAllModelByBrandAndMedal } = require('./get-all-model-by-brand-and-medal')(
            {
                modelList: modelList
            }
        );

        const { getAllModelByBrandAndMedalAndChain } = require('./get-all-model-by-brand-and-medal-and-chain')(
            {
                modelList: modelList
            }
        );

        
        const { getAllModelByBrandAndMedalAndChainAndRing } = require('./get-all-model-by-brand-and-medal-and-chain-and-ring')(
            {
                modelList: modelList
            }
        );
        
        const services = Object.freeze(
            {
                getAllModel,
                getAllModelByBrand,
                getAllModelByBrandAndMedal,
                getAllModelByBrandAndMedalAndChain,
                getAllModelByBrandAndMedalAndChainAndRing
            }
        );

        return services;
    }