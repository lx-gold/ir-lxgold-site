const buildGetAllBrand = require('./src/get-all-brand');

module.exports = function
(
    {
        getAllModel
    }
)
    {
        const getAllBrand = buildGetAllBrand(
            {
                getAllModel: getAllModel
            }
        );

        const services = Object.freeze(
            {
                getAllBrand
            }
        );

        return services;
    }