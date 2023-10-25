const buildModelBrandMedalChainPanelHtml = require('./src/brand-medal-chain-panel-html');
const buildModelBrandMedalChainPanelAmp = require('./src/brand-medal-chain-panel-amp');

module.exports = function
(
    {
        modelListRender,
        selectBrandRender,
        selectChainRender,
        selectMedalRender,
        selectRingRender
    }
)
    {
        const modelBrandMedalChainPanelHtml = buildModelBrandMedalChainPanelHtml(
            {
                modelListHtmlRender: modelListRender.html,
                selectBrandHtmlRender: selectBrandRender.html,
                selectChainHtmlRender: selectChainRender.html,
                selectMedalHtmlRender: selectMedalRender.html,
                selectRingHtmlRender:selectRingRender.html
            }
        );
        const modelBrandMedalChainPanelAmp = buildModelBrandMedalChainPanelAmp(
            {
                modelListAmpRender: modelListRender.amp,
                selectBrandAmpRender:selectBrandRender.amp,
                selectChainAmpRender: selectChainRender.amp,
                selectMedalAmpRender: selectMedalRender.amp,
                selectRingAmpRender: selectRingRender.amp
            }
        );

        const services = Object.freeze(
            {
                html: modelBrandMedalChainPanelHtml,
                amp: modelBrandMedalChainPanelAmp,
            }
        );

        return services;
    }