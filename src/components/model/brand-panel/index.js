const buildModelBrandPanelHtml = require('./src/brand-panel-html');
const buildModelBrandPanelAmp = require('./src/brand-panel-amp');

module.exports = function
(
    {
        modelListRender,
        selectBrandRender,
        selectMedalRender
    }
)
    {
        const modelBrandPanelHtml = buildModelBrandPanelHtml(
            {
               modelListHtmlRender: modelListRender.html,
               selectBrandHtmlRender: selectBrandRender.html,
               selectMedalHtmlRender: selectMedalRender.html
            }
        );
        const modelBrandPanelAmp = buildModelBrandPanelAmp(
            {
                modelListAmpRender: modelListRender.amp,
                selectBrandAmpRender: selectBrandRender.amp,
                selectMedalAmpRender:selectMedalRender.amp
            }
        );

        const services = Object.freeze(
            {
                html: modelBrandPanelHtml,
                amp: modelBrandPanelAmp,
            }
        );

        return services;
    }