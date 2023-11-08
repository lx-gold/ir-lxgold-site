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

                
                const htmlcontent = `
                    <nav class="panel-navigation">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </nav>
                    `+ selectBrandHtmlContent + modelListHtmlContent;

                return htmlcontent;

            }
    }