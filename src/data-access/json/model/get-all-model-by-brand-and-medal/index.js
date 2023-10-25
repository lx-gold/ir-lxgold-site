const buildGetAllModelByBrandAndMedal = require('./src/get-all-model-by-brand-and-medal');

module.exports = function
(
    {
        getAllModel
    }
)
    {
        const getAllModelByBrandAndMedal = buildGetAllModelByBrandAndMedal(
            {
                getAllModel: getAllModel
            }

        );

        const services = Object.freeze(
            {
                getAllModelByBrandAndMedal
            }
        );

        return services;
    }