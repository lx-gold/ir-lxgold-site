const buildRingSelectItemHtml = require('./src/ring-select-item-html');
const buildRingSelectItemAmp = require('./src/ring-select-item-amp');

module.exports = function
(
    {
        goToBrandChainRingModelListButton
    }
)
    {
        const ringSelectItemHtml = buildRingSelectItemHtml(
            {
                goToBrandChainRingModelListHtmlButton: goToBrandChainRingModelListButton.html
            }
        );

        const ringSelectItemAmp = buildRingSelectItemAmp(
            {
                goToBrandChainRingModelListAmpButton: goToBrandChainRingModelListButton.amp
            }
        );

        const services = Object.freeze(
            {
                html: ringSelectItemHtml,
                amp: ringSelectItemAmp,
            }
        );

        return services;
    }