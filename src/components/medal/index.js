module.exports = function
()
    {
        const goToBrandMedalModelListButton = require('./go-to-brand-medal-model-list')();

        const selectMedal  = require('./select')(
            {
                goToBrandMedalModelListButton: goToBrandMedalModelListButton
            }
        );

        const services = Object.freeze(
            {
                selectMedal
            }
        );

        return services;
    }