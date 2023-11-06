module.exports = function
(
    {
        weightLabel
    }
)
    {
        const goToBrandChainModelListButton = require('./go-to-brand-chain-model-list')();

        const selectChain = require('./select')(
            {
                goToBrandChainModelListButton: goToBrandChainModelListButton,
                weightLabel: weightLabel
            }
        );

        const services = Object.freeze(
            {
                selectChain
            }
        );

        return services;
    }