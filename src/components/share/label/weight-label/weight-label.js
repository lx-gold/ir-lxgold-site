module.exports = function buildWeightLabel
()
    {
        return function weightLabel
        (
            {
                weight
            }
        )
            {
                if
                (
                    typeof weight !== "number" 
                )
                    {
                        throw new Error('weightLabel must have weight');
                    }

                return `
                    <b>${weight} گرم</b><small>0.05 گرم</small>
                `;
            }
    }