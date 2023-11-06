const buildChainSelectItemHtml = require('./src/chain-select-item-html');
const buildChainSelectItemAmp = require('./src/chain-select-item-amp');

module.exports = function
(
    {
        goToBrandChainModelListButton,
        weightLabel
    }
)
    {
        const chainSelectItemAmp = buildChainSelectItemAmp(
            {
                goToBrandChainModelListButtonAmp: goToBrandChainModelListButton.amp,
                weightLabel: weightLabel
            }
        );

        const chainSelectItemHtml = buildChainSelectItemHtml(
            {
                goToBrandChainModelListButtonHtml:goToBrandChainModelListButton.html,
                weightLabel: weightLabel
            }
        );

        const services = Object.freeze(
            {
                html: chainSelectItemHtml,
                amp: chainSelectItemAmp,
            }
        );

        return services;
    }