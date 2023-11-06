const buildMedalSelectItemHtml = require('./src/medal-select-item-html');
const buildMedalSelectItemAmp = require('./src/medal-select-item-amp');

module.exports = function
(
    {
        goToBrandMedalModelListButton,
        weightLabel
    }
)
    {
        const medalSelectItemHtml = buildMedalSelectItemHtml(
            {
                goToBrandMedalModelListButtonHtml: goToBrandMedalModelListButton.html,
                weightLabel: weightLabel
            }
        );
        const medalSelectItemAmp = buildMedalSelectItemAmp(
            {
                goToBrandMedalModelListButtonAmp: goToBrandMedalModelListButton.amp,
                weightLabel: weightLabel
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