const buildBrandModelListHtmlPage = require('./src/brand-model-list-html-page');
const buildBrandModelListAmpPage = require('./src/brand-model-list-amp-page');

module.exports = function
(
    {
        headTag,
        modelBrandPanelRender,
        minifyCss,
        header
    }
)
    {
        const brandModelListHtmlPage = buildBrandModelListHtmlPage(
            {
                headTag: headTag.html,
                modelBrandPanelHtmlRender: modelBrandPanelRender.html,
                headerHtml:header.html
            }
        );

        const brandModelListAmpPage = buildBrandModelListAmpPage(
            {
                headAmpTag: headTag.amp,
                modelBrandPanelAmpRender: modelBrandPanelRender.amp,
                minifyCss: minifyCss,
                headerAmp:header.amp
            }
        )

        const services = Object.freeze(
            {
                html: brandModelListHtmlPage,
                amp:brandModelListAmpPage
            }
        );

        return services;
    }