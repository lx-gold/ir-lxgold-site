module.exports = function buildHeadKeywordsTag
()
    {
        return async function headKeywordsTag
        (
            {
                keywordList
            }
        )
            {

                if
                (
                    !keywordList
                )
                    {
                        throw new Error('headKeywordsTag must have keywordList')
                    }

                if
                (
                    keywordList &&
                    keywordList.length <= 0
                )
                    {
                        throw new Error('headKeywordsTag keywordList must have one item at least')
                    }

                const keywordRenderResult = keywordList.join(',');
                

                const result = `
                    <meta
                        name="keywords"
                        content="${keywordRenderResult}"
                    >
                `

                return result;

            }
    }