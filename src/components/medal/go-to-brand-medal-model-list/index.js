const buildGoToBrandMedalModelListHtml = require('./src/go-to-brand-medal-model-list-html');
const buildGoToBrandMedalModelListAmp = require('./src/go-to-brand-medal-model-list-amp');

module.exports = function
()
    {
        const goToBrandMedalModelListHtml = buildGoToBrandMedalModelListHtml();
        const goToBrandMedalModelListAmp = buildGoToBrandMedalModelListAmp();

        const services = Object.freeze(
            {
                html: goToBrandMedalModelListHtml,
                amp: goToBrandMedalModelListAmp,
            }
        );

        return services;
    }