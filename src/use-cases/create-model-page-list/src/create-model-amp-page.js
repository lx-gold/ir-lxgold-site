module.exports = function buildCreateModelAmpPage
(
    {
        modelPageAmpRender,
        saveFile
    }
)
    {
        if
        (
            !modelPageAmpRender
        )
            {
                throw new Error('buildCreateModelAmpPage must have modelPageAmpRender');
            }
        if
        (
            !saveFile
        )
            {
                throw new Error('buildCreateModelAmpPage must have saveFile');
            }


        return async function createModelAmpPage
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
                        throw new Error('createModelAmpPage must have model');
                    }

                try
                {
                    

                    const modelPageContent = await modelPageAmpRender(
                        {
                            model:model
                        }

                    );
                    
                    await saveFile(
                        {
                            directoryList : ['amp','models',model.id],
                            content: modelPageContent,
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