const buildModelPanelHtml = require('./src/model-panel-html');
const buildModelPanelAmp = require('./src/model-panel-amp');

module.exports = function
(
    {
        modelListRender,
        selectBrandRender,
    }
)
    {
        const modelPanelAmp = buildModelPanelAmp(
            {
                modelListRenderAmp: modelListRender.amp,
                selectBrandRenderAmp: selectBrandRender.amp
                
            }
        );
        
        const modelPanelHtml = buildModelPanelHtml(
            {
                modelListRenderHtml: modelListRender.html,
                selectBrandRenderHtml: selectBrandRender.html,
            }
        );

        const services = Object.freeze(
            {
                html: modelPanelHtml,
                amp: modelPanelAmp,
            }
        );

        return services;
    }