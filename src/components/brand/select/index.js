module.exports = function
(
    {
        goToBrandModelListButton
    }
)
    {
        const selectItemServices = require('./select-item')(
            {
                goToBrandModelListButton: goToBrandModelListButton
            }
        );

        const selectPanelServices = require('./select-panel')(
            {
                brandSelectItemRender: selectItemServices
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