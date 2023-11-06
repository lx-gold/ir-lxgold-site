module.exports = function
(
    {
        goToBrandChainModelListButton,
        weightLabel
    }
)
    {
        const selectItemServices = require('./select-item')(
            {
                goToBrandChainModelListButton: goToBrandChainModelListButton,
                weightLabel:weightLabel
            }
        );

        const selectPanelServices = require('./select-panel')(
            {
                chainSelectItemRender: selectItemServices
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