module.exports = function
()
    {
        const modelServices = require('./model')();
        
        const chainServices = require('./chain')(
            {
                getAllModel: modelServices.getAllModel
            }
        );

        const medalServices = require('./medal')(
            {
                getAllModel: modelServices.getAllModel
            }
        );

        const brandServices = require('./brand')(
            {
                getAllModel: modelServices.getAllModel
            }
        );

        const ringServices = require('./ring')(
            {
                getAllModel: modelServices.getAllModel
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