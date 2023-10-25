const buildGoToBrandChainRingModelListHtml = require('./src/go-to-brand-chain-ring-model-list-html');
const buildGoToBrandChainRingModelListAmp = require('./src/go-to-brand-chain-ring-model-list-amp');

module.exports = function
()
    {
        const goToBrandChainRingModelListHtml = buildGoToBrandChainRingModelListHtml();
        const goToBrandChainRingModelListAmp = buildGoToBrandChainRingModelListAmp();

        const services = Object.freeze(
            {
                html: goToBrandChainRingModelListHtml,
                amp: goToBrandChainRingModelListAmp,
            }
        );

        return services;
    }