const buildModelListHtml = require('./src/model-list-html');
const buildModelListAmp = require('./src/model-list-amp');

module.exports = function
(
    {
        modelListItemRender
    }
)
    {
        const modelListHtml = buildModelListHtml(
            {
                modelListItemHtmlRender: modelListItemRender.html
            }
        );
        const modelListAmp = buildModelListAmp(
            {
                modelListItemAmpRender: modelListItemRender.amp
            }
        );

        const services = Object.freeze(
            {
                html: modelListHtml,
                amp: modelListAmp,
            }
        );

        return services;
    }