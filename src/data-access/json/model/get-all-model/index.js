const buildGetAllModel = require('./src/get-all-model');

module.exports = function
()
    {
        const getAllModel = buildGetAllModel();

        const services = Object.freeze(
            {
                getAllModel
            }
        );

        return services;
    }