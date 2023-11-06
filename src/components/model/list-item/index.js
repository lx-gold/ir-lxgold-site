const buileModelListItemHtml = require('./src/model-list-item-html');
const buileModelListItemAmp = require('./src/model-list-item-amp');

module.exports = function
(
    {
        goToModelDetail,
        priceLabel,
        weightLabel
    }
)
    {
        const modelListItemHtml = buileModelListItemHtml(
            {
                goToModelDetailHtml: goToModelDetail.html,
                priceLabel:  priceLabel,
                weightLabel: weightLabel
            }
        );
        const modelListItemAmp = buileModelListItemAmp(
            {
                goToModelDetailAmp: goToModelDetail.amp,
                priceLabel:  priceLabel,
                weightLabel: weightLabel
            }
        );

        const services = Object.freeze(
            {
                html: modelListItemHtml,
                amp: modelListItemAmp,
            }
        );

        return services;
    }