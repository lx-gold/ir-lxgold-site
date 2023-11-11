const buildBrandMedalChainRingModelListHtmlPage = require('./src/brand-medal-chain-ring-model-html-list');
const buildBrandMedalChainRingModelListAmpPage = require('./src/brand-medal-chain-ring-model-amp-list');


module.exports = function
(
    {
        headTag,
        modelBrandMedalChainRingPanelRender,
        minifyCss,
        header
    }
)
    {
        const brandMedalChainRingModelListHtmlPage = buildBrandMedalChainRingModelListHtmlPage(
            {
                headTag: headTag.html,
                modelBrandMedalChainRingPanelHtmlRender: modelBrandMedalChainRingPanelRender.html,
                headerHtml: header.html
            }
        );

        const brandMedalChainRingModelListAmpPage = buildBrandMedalChainRingModelListAmpPage(
            {
                headAmpTag: headTag.amp,
                modelBrandMedalChainRingPanelAmpRender: modelBrandMedalChainRingPanelRender.amp,
                minifyCss: minifyCss,
                headerAmp: header.amp
            }
        )

        const services = Object.freeze(
            {
                html: brandMedalChainRingModelListHtmlPage,
                amp: brandMedalChainRingModelListAmpPage
            }
        );

        return services;
    }