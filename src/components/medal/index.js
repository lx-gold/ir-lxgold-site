module.exports = function
(
    {
        weightLabel
    }
)
    {
        const goToBrandMedalModelListButton = require('./go-to-brand-medal-model-list')();

        const selectMedal  = require('./select')(
            {
                goToBrandMedalModelListButton: goToBrandMedalModelListButton,
                weightLabel: weightLabel
            }
        );

        const services = Object.freeze(
            {
                selectMedal
            }
        );

        return services;
    }