module.exports = function
(
    {
        goToBrandChainRingModelListButton
    }
)
    {
        const selectItemServices = require('./select-item')(
            {
                goToBrandChainRingModelListButton: goToBrandChainRingModelListButton
            }
        );

        const selectPanelServices = require('./select-panel')(
            {
                ringSelectItemRender:selectItemServices
            }
        )
        
        const services = Object.freeze(
            {
                html: selectPanelServices.html,
                amp: selectPanelServices.amp,
            }
        );

        return services;
    }