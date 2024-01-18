module.exports = function buildGenerateIndexAmpPage
(
    {
        indexAmpGenerator,
        saveFile,
        modelList,
        brandList
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
            !modelList
        )
            {
                throw new Error('buildGenerateIndexAmpPage mush have modelList');
            }

        if
        (
            !brandList
        )
            {
                throw new Error('buildGenerateIndexAmpPage mush have brandList');
            }
            
        return async function generateIndexAmpPage
        ()
            {
                try
                    {

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