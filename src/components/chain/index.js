module.exports = function
()
    {
        const goToBrandChainModelListButton = require('./go-to-brand-chain-model-list')();

        const selectChain = require('./select')(
            {
                goToBrandChainModelListButton: goToBrandChainModelListButton
            }
        );

        const services = Object.freeze(
            {
                selectChain
            }
        );

        return services;
    }