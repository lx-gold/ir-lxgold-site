module.exports = function
()
    {

        const { getAllBrand } = require('./get-all-brand')();

        const services = Object.freeze(
            {
                getAllBrand
            }
        );

        return services;
    }