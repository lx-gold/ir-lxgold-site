const buildChainSelectItemHtml = require('./src/chain-select-item-html');
const buildChainSelectItemAmp = require('./src/chain-select-item-amp');

module.exports = function
(
    {
        goToBrandChainModelListButton
    }
)
    {
        const chainSelectItemAmp = buildChainSelectItemAmp(
            {
                goToBrandChainModelListButtonAmp: goToBrandChainModelListButton.amp
            }
        );

        const chainSelectItemHtml = buildChainSelectItemHtml(
            {
                goToBrandChainModelListButtonHtml:goToBrandChainModelListButton.html
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