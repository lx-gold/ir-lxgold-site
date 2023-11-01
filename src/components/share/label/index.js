const buildPriceLabel = require('./price-label/price-label');
const buildWeightLabel = require('./weight-label/weight-label');

module.exports = function
()
    {

        const priceLabel = buildPriceLabel();
        const weightLabel = buildWeightLabel();

        const services = Object.freeze(
            {
                priceLabel:priceLabel,
                weightLabel:weightLabel
            }
        );

        return services;

    }