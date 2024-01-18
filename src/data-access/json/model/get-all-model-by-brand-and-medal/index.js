const buildGetAllModelByBrandAndMedal = require('./src/get-all-model-by-brand-and-medal');

module.exports = function
(
    {
        modelList
    }
)
    {
        const getAllModelByBrandAndMedal = buildGetAllModelByBrandAndMedal(
            {
                modelList: modelList
            }

        );

        const services = Object.freeze(
            {
                getAllModelByBrandAndMedal
            }
        );

        return services;
    }