module.exports = function
(
    {
        goToBrandChainModelListButton
    }
)
    {
        const selectItemServices = require('./select-item')(
            {
                goToBrandChainModelListButton: goToBrandChainModelListButton
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