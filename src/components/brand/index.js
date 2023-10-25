module.exports = function
()
    {
        const goToBrandModelListButton = require('./go-to-brand-model-list')();

        const selectBrand = require('./select')(
            {
                goToBrandModelListButton: goToBrandModelListButton
            }
        );

        const services = Object.freeze(
            {
                selectBrand
            }
        );

        return services;
    }