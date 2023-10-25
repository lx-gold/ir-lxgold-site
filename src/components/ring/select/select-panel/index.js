const buildSelectRingPanelHtml = require('./src/ring-select-panel-html');
const buildSelectRingPanelAmp = require('./src/ring-select-panel-amp');

module.exports = function
(
    {
        ringSelectItemRender
    }
)
    {
        const selectRingPanelHtml = buildSelectRingPanelHtml(
            {
                ringSelectItemHtmlRender: ringSelectItemRender.html
            }
        );
        
        const selectRingPanelAmp = buildSelectRingPanelAmp(
            {
                ringSelectItemAmpRender: ringSelectItemRender.amp
            }
        );

        const services = Object.freeze(
            {
                html: selectRingPanelHtml,
                amp: selectRingPanelAmp,
            }
        );

        return services;
    }