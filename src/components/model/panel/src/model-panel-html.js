module.exports = function buildModelPanelHtml
(
    {
        selectBrandRenderHtml,
        modelListRenderHtml
    }
)
    {
        if
        (
            !selectBrandRenderHtml
        )
            {
                throw new Error('buildModelPanelHtml must have selectBrandRenderHtml')
            }

        if
        (
            !modelListRenderHtml
        )
            {
                throw new Error('buildModelPanelHtml must have modelListRenderHtml')
            }
        return async function modelPanelHtml
        (
            {
                brandList,
                modelList
            }
        )
            {
                if
                (
                    !brandList
                )
                    {
                        throw new Error('modelPanelHtml must have brandList')
                    }
                if
                (
                    !modelList
                )
                    {
                        throw new Error('modelPanelHtml must have modelList')
                    }

                const selectBrandHtmlContent = await selectBrandRenderHtml(
                    {
                        brandList: brandList
                    }
                );

                const modelListHtmlContent = await modelListRenderHtml (
                    {
                        modelList: modelList
                    }
                );

                
                const htmlcontent = selectBrandHtmlContent + modelListHtmlContent;

                return htmlcontent;

            }
    }