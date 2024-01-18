module.exports = function
()
    {
        const modelServices = require('./model')();

        const modelList = modelServices.getAllModel();
        
        const chainServices = require('./chain')(
            {
                modelList: modelList
            }
        );

        const medalServices = require('./medal')(
            {
                modelList: modelList
            }
        );

        const brandServices = require('./brand')();

        const ringServices = require('./ring')(
            {
                modelList: modelList
            }
        );

        const services = Object.freeze(
            {
                model: modelServices,
                brand: brandServices,
                chain: chainServices,
                medal: medalServices,
                ring: ringServices
            }
        );

        return services;
    }