module.exports = function buildPriceLabel
()
    {
        return function priceLabel
        (
            {
                price
            }
        )
            {
                if
                (
                    typeof price !== "number" 
                )
                    {
                        throw new Error('priceLabel must have price');
                    }

                let formatedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                return `
                    <b>${formatedPrice} ریال</b> 
                `;
            }
    }
    