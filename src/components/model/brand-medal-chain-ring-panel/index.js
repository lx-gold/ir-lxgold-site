const buildModelBrandMedalChainRingPanelHtml = require('./src/brand-medal-chain-ring-panel-html');
const buildModelBrandMedalChainRingPanelAmp = require('./src/brand-medal-chain-ring-panel-amp');

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
        const modelBrandMedalChainRingPanelHtml = buildModelBrandMedalChainRingPanelHtml(
            {
               modelListHtmlRender: modelListRender.html,
               selectBrandHtmlRender: selectBrandRender.html,
               selectChainHtmlRender: selectChainRender.html,
               selectMedalHtmlRender: selectMedalRender.html,
               selectRingHtmlRender: selectRingRender.html
            }
        );
        const modelBrandMedalChainRingPanelAmp = buildModelBrandMedalChainRingPanelAmp(
            {
                modelListAmpRender: modelListRender.amp,
                selectBrandAmpRender: selectBrandRender.amp,
                selectChainAmpRender: selectChainRender.amp,
                selectMedalAmpRender: selectMedalRender.amp,
                selectRingAmpRender: selectRingRender.amp

            }
        );

        const services = Object.freeze(
            {
                html: modelBrandMedalChainRingPanelHtml,
                amp: modelBrandMedalChainRingPanelAmp,
            }
        );

        return services;
    }