const buildRingSelectItemHtml = require('./src/ring-select-item-html');
const buildRingSelectItemAmp = require('./src/ring-select-item-amp');

module.exports = function
(
    {
        goToBrandChainRingModelListButton,
        weightLabel
    }
)
    {
        const ringSelectItemHtml = buildRingSelectItemHtml(
            {
                goToBrandChainRingModelListHtmlButton: goToBrandChainRingModelListButton.html,
                weightLabel: weightLabel
            }
        );

        const ringSelectItemAmp = buildRingSelectItemAmp(
            {
                goToBrandChainRingModelListAmpButton: goToBrandChainRingModelListButton.amp,
                weightLabel: weightLabel
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