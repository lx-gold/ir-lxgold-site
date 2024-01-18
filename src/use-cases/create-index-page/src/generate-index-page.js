module.exports = function buildGenerateIndexPage
(
    {
        indexGenerator,
        saveFile,
        modelList,
        brandList
    }
)
    {
        if
        (
            !indexGenerator
        )
            {
                throw new Error('buildGenerateIndexPage mush have indexGenerator');
            }
        
        if
        (
            !saveFile
        )
            {
                throw new Error('buildGenerateIndexPage mush have saveFile');
            }

        if
        (
            !modelList
        )
            {
                throw new Error('buildGenerateIndexPage mush have modelList');
            }

        if
        (
            !brandList
        )
            {
                throw new Error('buildGenerateIndexPage mush have brandList');
            }
            
        return async function generateIndexPage
        ()
            {
                try
                    {

                        const indexPageContent = await indexGenerator(
                            {
                                modelList: modelList,
                                brandList: brandList
                            }

                        );
                        
                        await saveFile(
                            {
                                directoryList : [],
                                content: indexPageContent,
                                fileName:'index.html'
                            }
                        )
                    }
                catch
                (
                    error
                )
                    {
                        throw error;        
                    }
            }
    }