const useCases = require('./use-cases');

module.exports = async function()
    {
        const useCaseServices = await useCases();
        return useCaseServices;
    }