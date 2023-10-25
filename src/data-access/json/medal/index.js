module.exports = function
(
    {
        getAllModel
    }
)
    {

        const { getAllMedalByBrand } = require('./get-all-medal-by-brand')(
            {
                getAllModel: getAllModel
            }
        );

        const services = Object.freeze(
            {
                getAllMedalByBrand
            }
        );

        return services;
    }