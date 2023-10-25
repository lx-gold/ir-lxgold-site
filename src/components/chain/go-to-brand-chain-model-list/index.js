const buildGoToBrandChainModelListHtml = require('./src/go-to-brand-chain-model-list-html');
const buildGoToBrandChainModelListAmp = require('./src/go-to-brand-chain-model-list-amp');

module.exports = function
()
    {
        const goToBrandChainModelListAmp = buildGoToBrandChainModelListAmp();
        const goToBrandChainModelListHtml = buildGoToBrandChainModelListHtml();

        const services = Object.freeze(
            {
                html: goToBrandChainModelListHtml,
                amp: goToBrandChainModelListAmp,
            }
        );

        return services;
    }