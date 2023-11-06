module.exports = function
(
    {
        goToBrandMedalModelListButton,
        weightLabel
    }
)
    {
        const selectItemServices = require('./select-item')(
            {
                goToBrandMedalModelListButton: goToBrandMedalModelListButton,
                weightLabel: weightLabel
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