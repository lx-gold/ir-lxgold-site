const buildModelBrandMedalPanelHtml = require('./src/brand-medal-panel-html');
const buildModelBrandMedalPanelAmp = require('./src/brand-medal-panel-amp');

module.exports = function
(
    {
        modelListRender,
        selectBrandRender,
        selectChainRender,
        selectMedalRender
    }
)
    {
        const modelBrandMedalPanelHtml = buildModelBrandMedalPanelHtml(
            {
               modelListHtmlRender: modelListRender.html,
               selectBrandHtmlRender: selectBrandRender.html,
               selectChainHtmlRender: selectChainRender.html,
               selectMedalHtmlRender: selectMedalRender.html
            }
        );
        const modelBrandMedalPanelAmp = buildModelBrandMedalPanelAmp(
            {
                modelListAmpRender: modelListRender.amp,
                selectBrandAmpRender: selectBrandRender.amp,
                selectChainAmpRender: selectChainRender.amp,
                selectMedalAmpRender:selectMedalRender.amp
            }
        );

        const services = Object.freeze(
            {
                html: modelBrandMedalPanelHtml,
                amp: modelBrandMedalPanelAmp,
            }
        );

        return services;
    }