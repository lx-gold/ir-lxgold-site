const buildGoToBrandModelListHtml = require('./src/go-to-brand-model-list-html');
const buildGoToBrandModelListAmp = require('./src/go-to-brand-model-list-amp');

module.exports = function
()
    {
        const goToBrandModelListAmp = buildGoToBrandModelListAmp();
        const goToBrandModelListHtml = buildGoToBrandModelListHtml();

        const services = Object.freeze(
            {
                html: goToBrandModelListHtml,
                amp: goToBrandModelListAmp,
            }
        );

        return services;
    }