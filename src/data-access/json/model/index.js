module.exports = function
()
    {

        const { getAllModel } = require('./get-all-model')();

        const { getAllModelByBrand } = require('./get-all-model-by-brand')(
            {
                getAllModel: getAllModel
            }
        )

        const { getAllModelByBrandAndMedal } = require('./get-all-model-by-brand-and-medal')(
            {
                getAllModel: getAllModel
            }
        );

        const { getAllModelByBrandAndMedalAndChain } = require('./get-all-model-by-brand-and-medal-and-chain')(
            {
                getAllModel: getAllModel
            }
        );

        
        const { getAllModelByBrandAndMedalAndChainAndRing } = require('./get-all-model-by-brand-and-medal-and-chain-and-ring')(
            {
                getAllModel: getAllModel
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