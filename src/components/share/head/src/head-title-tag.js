module.exports = function buildHeadTitleTag
()
    {
        return async function headTitleTag
        (
            {
                titleContnet
            }
        )
            {
                if
                (
                    !titleContnet
                )
                    {
                        throw new Error('headTitleTag must have titleContnet')
                    }
                    
                const result = `
                    <title>
                        ${titleContnet}
                    </title>
                `;
                return result;
            }
    }