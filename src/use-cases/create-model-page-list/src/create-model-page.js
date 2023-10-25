module.exports = function buildCreateModelPage
(
    {
        modelPageRender,
        saveFile
    }
)
    {
        if
        (
            !modelPageRender
        )
            {
                throw new Error('buildCreateModelPage must have modelPageRender');
            }
        if
        (
            !saveFile
        )
            {
                throw new Error('buildCreateModelPage must have saveFile');
            }

 
        return async function createModelPage
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
                        throw new Error('createModelPage must have model');
                    }

                try
                {
                    

                    const modelPageContent = await modelPageRender(
                        {
                            model:model,
                        }

                    );
                    
                    await saveFile(
                        {
                            directoryList : ['models',model.id],
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