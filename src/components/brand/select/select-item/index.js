const buildBrandSelectItemHtml = require('./src/brand-select-item-html');
const buildBrandSelectItemAmp = require('./src/brand-select-item-amp');

module.exports = function
(
    {
        goToBrandModelListButton
    }
)
    {
        const brandSelectItemAmp = buildBrandSelectItemAmp(
            {
                goToBrandModelListButtonAmp: goToBrandModelListButton.amp
            }
        );

        const brandSelectItemHtml = buildBrandSelectItemHtml(
            {
                goToBrandModelListButtonHtml: goToBrandModelListButton.html
            }
        );

        const services = Object.freeze(
            {
                html: brandSelectItemHtml,
                amp: brandSelectItemAmp,
            }
        );

        return services;
    }