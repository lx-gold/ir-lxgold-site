const buildMedalSelectItemHtml = require('./src/medal-select-item-html');
const buildMedalSelectItemAmp = require('./src/medal-select-item-amp');

module.exports = function
(
    {
        goToBrandMedalModelListButton
    }
)
    {
        const medalSelectItemHtml = buildMedalSelectItemHtml(
            {
                goToBrandMedalModelListButtonHtml: goToBrandMedalModelListButton.html
            }
        );
        const medalSelectItemAmp = buildMedalSelectItemAmp(
            {
                goToBrandMedalModelListButtonAmp: goToBrandMedalModelListButton.amp
            }
        );

        const services = Object.freeze(
            {
                html: medalSelectItemHtml,
                amp: medalSelectItemAmp,
            }
        );

        return services;
    }