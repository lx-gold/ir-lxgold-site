const buildBrandMedalChainModelListHtmlPage = require('./src/brand-medal-chain-model-html-list');
const buildBrandMedalChainModelListAmpPage = require('./src/brand-medal-chain-model-amp-list');


module.exports = function
(
    {
        headTag,
        modelBrandMedalChainPanelRender,
        minifyCss,
        header
    }
)
    {
        const brandMedalChainModelListHtmlPage = buildBrandMedalChainModelListHtmlPage(
            {
                headTag: headTag.html,
                modelBrandMedalChainPanelHtmlRender: modelBrandMedalChainPanelRender.html,
                headerHtml:header.html
            }
        );

        const brandMedalChainModelListAmpPage = buildBrandMedalChainModelListAmpPage(
            {
                headAmpTag: headTag.amp,
                modelBrandMedalChainPanelAmpRender: modelBrandMedalChainPanelRender.amp,
                minifyCss: minifyCss,
                headerAmp:header.amp
            }
        )

        const services = Object.freeze(
            {
                html: brandMedalChainModelListHtmlPage,
                amp: brandMedalChainModelListAmpPage
            }
        );

        return services;
    }