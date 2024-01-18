const buildGetAllBrand = require('./src/get-all-brand');

module.exports = function
()
    {
        const getAllBrand = buildGetAllBrand();

        const services = Object.freeze(
            {
                getAllBrand
            }
        );

        return services;
    }