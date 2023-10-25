module.exports = function buildGenerateIndexAmpPage
(
    {
        indexAmpGenerator,
        saveFile,
        getAllModelListDB,
        getAllBrandListDB
    }
)
    {
        if
        (
            !indexAmpGenerator
        )
            {
                throw new Error('buildGenerateIndexAmpPage mush have indexAmpGenerator');
            }
        
        if
        (
            !saveFile
        )
            {
                throw new Error('buildGenerateIndexAmpPage mush have saveFile');
            }

        if
        (
            !getAllModelListDB
        )
            {
                throw new Error('buildGenerateIndexAmpPage mush have getAllModelListDB');
            }

        if
        (
            !getAllBrandListDB
        )
            {
                throw new Error('buildGenerateIndexAmpPage mush have getAllBrandListDB');
            }
            
        return async function generateIndexAmpPage
        ()
            {
                try
                    {
                        const modelList = await getAllModelListDB();
                        const brandList = await getAllBrandListDB();

                        const indexAmpPageContent = await indexAmpGenerator(
                            {
                                modelList: modelList,
                                brandList: brandList
                            }

                        );
                        
                        await saveFile(
                            {
                                directoryList : ['amp'],
                                content: indexAmpPageContent,
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