const buildGetAllModelByBrand = require('./src/get-all-model-by-brand');

module.exports = function
(
    {
        modelList
    }
)
    {
        const getAllModelByBrand = buildGetAllModelByBrand(
            {
                modelList:modelList
            }

        );

        const services = Object.freeze(
            {
                getAllModelByBrand
            }
        );

        return services;
    }