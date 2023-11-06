module.exports = function
(
    {
        goToBrandChainRingModelListButton,
        weightLabel
    }
)
    {
        const selectItemServices = require('./select-item')(
            {
                goToBrandChainRingModelListButton: goToBrandChainRingModelListButton,
                weightLabel: weightLabel
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