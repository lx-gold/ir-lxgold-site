const buileModelListItemHtml = require('./src/model-list-item-html');
const buileModelListItemAmp = require('./src/model-list-item-amp');

module.exports = function
(
    {
        goToModelDetail
    }
)
    {
        const modelListItemHtml = buileModelListItemHtml(
            {
                goToModelDetailHtml: goToModelDetail.html
            }
        );
        const modelListItemAmp = buileModelListItemAmp(
            {
                goToModelDetailAmp: goToModelDetail.amp
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