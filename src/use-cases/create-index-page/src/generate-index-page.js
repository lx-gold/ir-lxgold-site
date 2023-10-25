module.exports = function buildGenerateIndexPage
(
    {
        indexGenerator,
        saveFile,
        getAllModelListDB,
        getAllBrandListDB
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
            !getAllModelListDB
        )
            {
                throw new Error('buildGenerateIndexPage mush have getAllModelListDB');
            }

        if
        (
            !getAllBrandListDB
        )
            {
                throw new Error('buildGenerateIndexPage mush have getAllBrandListDB');
            }
            
        return async function generateIndexPage
        ()
            {
                try
                    {
                        const modelList = await getAllModelListDB();
                        const brandList = await getAllBrandListDB();

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