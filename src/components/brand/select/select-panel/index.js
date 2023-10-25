const buildSelectBrandPanelHtml = require('./src/brand-select-panel-html');
const buildSelectBrandPanelAmp = require('./src/brand-select-panel-amp');

module.exports = function
(
    {
        brandSelectItemRender
    }
)
    {
        const selectBrandPanelAmp = buildSelectBrandPanelAmp(
            {
                brandSelectItemRenderAmp: brandSelectItemRender.amp
            }
        );
        
        const selectBrandPanelHtml = buildSelectBrandPanelHtml(
            {
                brandSelectItemRenderHtml: brandSelectItemRender.html
            }
        );

        const services = Object.freeze(
            {
                html: selectBrandPanelHtml,
                amp: selectBrandPanelAmp,
            }
        );

        return services;
    }