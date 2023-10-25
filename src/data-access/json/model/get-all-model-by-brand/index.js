const buildGetAllModelByBrand = require('./src/get-all-model-by-brand');

module.exports = function
(
    {
        getAllModel
    }
)
    {
        const getAllModelByBrand = buildGetAllModelByBrand(
            {
                getAllModel:getAllModel
            }

        );

        const services = Object.freeze(
            {
                getAllModelByBrand
            }
        );

        return services;
    }