module.exports = function buildModelWebPageLdJson
(
    {
        webPageLdJson
    }

)
    {
        if
        (
            !webPageLdJson
        )
            {
                throw new Error('buildModelWebPageLdJson Must have webPageLdJson');
            }
        return async function modelWebPageLdJson
        (
            {
                model
            }
        )
            {
                if
                (
                    !model
                )
                    {
                        throw new Error('modelWebPageLdJson Must have model');
                    }

                const name = 'name1';

                const description = 'description1';

                const result = await webPageLdJson(
                    {
                        name: name,
                        description: description
                    }
                );

                return result;

                
            }
    }