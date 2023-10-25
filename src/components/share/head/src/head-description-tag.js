module.exports = function buildHeadDescriptionTag
()
    {
        return async function headDescriptionTag
        (
            {
                descriptionContent
            }
        )
            {
                if
                (
                    !descriptionContent
                )
                    {
                        throw new Error('headDescriptionTag must have descriptionContent')
                    }
                    
                const result = `
                    <meta
                        name="description"
                        content="${descriptionContent}"
                    >
                `;
                return result;

            }
    }