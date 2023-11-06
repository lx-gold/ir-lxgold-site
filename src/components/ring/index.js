module.exports = function
(
    {
        weightLabel
    }
)
    {
        const goToBrandChainRingModelListButton = require('./go-to-brand-chain-ring-model-list')();

        const selectRing  = require('./select')(
            {
                goToBrandChainRingModelListButton: goToBrandChainRingModelListButton,
                weightLabel: weightLabel
            }
        );

        const services = Object.freeze(
            {
                selectRing
            }
        );

        return services;
    }