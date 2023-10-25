module.exports = function
()
    {
        const jsonServices = require('./json')();

        const services = Object.freeze(
            {
                json:jsonServices
            }
        );

        return services;
    }