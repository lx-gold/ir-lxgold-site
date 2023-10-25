const buildSelectMedalPanelHtml = require('./src/medal-select-panel-html');
const buildSelectMedalPanelAmp = require('./src/medal-select-panel-amp');

module.exports = function
(
    {
        medalSelectItemRender
    }
)
    {
        const selectMedalPanelHtml = buildSelectMedalPanelHtml(
            {
                medalSelectItemHtmlRender: medalSelectItemRender.html
            }
        );
        
        const selectMedalPanelAmp = buildSelectMedalPanelAmp(
            {
                medalSelectItemAmpRender:medalSelectItemRender.amp
            }
        );

        const services = Object.freeze(
            {
                html: selectMedalPanelHtml,
                amp: selectMedalPanelAmp,
            }
        );

        return services;
    }