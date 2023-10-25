const buildGoToModelDetailHtml = require('./src/go-to-model-detail-html');
const buildGoToModelDetailAmp = require('./src/go-to-model-detail-amp');

module.exports = function
()
    {
        const goToModelDetailHtml = buildGoToModelDetailHtml();
        const goToModelDetailAmp = buildGoToModelDetailAmp();

        const services = Object.freeze(
            {
                html: goToModelDetailHtml,
                amp: goToModelDetailAmp,
            }
        );

        return services;
    }