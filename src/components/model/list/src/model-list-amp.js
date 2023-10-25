module.exports = function buildModelListAmp
(
    {
        modelListItemAmpRender
    }
)
    {
        if
        (
            !modelListItemAmpRender
        )
            {
                throw new Error('buildModelListAmp must have modelListItemAmpRender')
            }
        return async function modelListAmp
        (
            {
                modelList
            }
        )
            {
                let modelListAmpRender ='';

                for 
                (
                    let modelIndex in modelList
                ) {
                    var currentModel = modelList[modelIndex];
                    const currenModelListImteAmpRender =  await modelListItemAmpRender(
                        {
                            model: currentModel
                        }
                    )
                    modelListAmpRender += currenModelListImteAmpRender;
                }

                return `
                <ul>
                    ${modelListAmpRender}
                </ul>`
            }
    }