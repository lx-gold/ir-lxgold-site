const buildBrandMedalModelListHtmlPage = require('./src/brand-medal-model-html-list');
const buildBrandMedalModelListAmpPage = require('./src/brand-medal-model-amp-list');

module.exports = function
(
    {
        headTag,
        modelBrandMedalPanelRender,
        minifyCss
    }
)
    {
        const brandMedalModelListHtmlPage = buildBrandMedalModelListHtmlPage(
            {
                headTag: headTag.html,
                modelBrandMedalPanelHtmlRender: modelBrandMedalPanelRender.html
            }
        );

        const brandMedalModelListAmpPage = buildBrandMedalModelListAmpPage(
            {
                headAmpTag: headTag.amp,
                modelBrandMedalPanelAmpRender: modelBrandMedalPanelRender.amp,
                minifyCss: minifyCss
            }
        )

        const services = Object.freeze(
            {
                html: brandMedalModelListHtmlPage,
                amp: brandMedalModelListAmpPage
            }
        );

        return services;
    }