module.exports = function
(
    {
        getAllModel
    }
)
    {

        const { getAllBrand } = require('./get-all-brand')(
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