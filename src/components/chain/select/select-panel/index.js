const buildSelectChainPanelHtml = require('./src/chain-select-panel-html');
const buildSelectChainPanelAmp = require('./src/chain-select-panel-amp');

module.exports = function
(
    {
        chainSelectItemRender
    }
)
    {
        const selectChainPanelAmp = buildSelectChainPanelAmp(
            {
                chainSelectItemRenderAmp: chainSelectItemRender.amp
            }
        );
        
        const selectChainPanelHtml = buildSelectChainPanelHtml(
            {
                chainSelectItemRenderHtml: chainSelectItemRender.html
            }
        );

        const services = Object.freeze(
            {
                html: selectChainPanelHtml,
                amp: selectChainPanelAmp,
            }
        );

        return services;
    }