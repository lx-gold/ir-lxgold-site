module.exports = function
(
    {
        goToBrandMedalModelListButton
    }
)
    {
        const selectItemServices = require('./select-item')(
            {
                goToBrandMedalModelListButton: goToBrandMedalModelListButton
            }
        );

        const selectPanelServices = require('./select-panel')(
            {
                medalSelectItemRender: selectItemServices
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