module.exports = function
()
    {
        const goToBrandChainRingModelListButton = require('./go-to-brand-chain-ring-model-list')();

        const selectRing  = require('./select')(
            {
                goToBrandChainRingModelListButton: goToBrandChainRingModelListButton
            }
        );

        const services = Object.freeze(
            {
                selectRing
            }
        );

        return services;
    }