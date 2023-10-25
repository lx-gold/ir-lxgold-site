module.exports = function buildCreateIndexPage
(
    {
        generateIndexPage,
        generateIndexAmpPage
    }
)
    {
        if
        (
            !generateIndexPage
        )
            {
                throw new Error('buildCreateIndexPage mush have generateIndexPage');
            }

        if
        (
            !generateIndexAmpPage
        )
            {
                throw new Error('buildCreateIndexPage mush have generateIndexAmpPage');
            }

        return async function createIndexPage
        ()
            {

                await generateIndexPage();
                
                await generateIndexAmpPage();
            }
    }