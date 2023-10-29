module.exports = function buildModelListHtml
(
    {
        modelListItemHtmlRender
    }
)
    {
        if
        (
            !modelListItemHtmlRender
        )
            {
                throw new Error('buildModelListHtml must have modelListItemHtmlRender')
            }
        return async function modelListHtml
        (
            {
                modelList
            }
        )
            {
                let modelListHtmlRender ='';

                for 
                (
                    let modelIndex in modelList
                ) {
                    var currentModel = modelList[modelIndex];
                    const currenModelListImteHtmlRender =  await modelListItemHtmlRender(
                        {
                            model: currentModel
                        }
                    )
                    modelListHtmlRender += currenModelListImteHtmlRender;
                }

                return `
                <ul class="model-list">
                    ${modelListHtmlRender}
                </ul>`
            }
    }