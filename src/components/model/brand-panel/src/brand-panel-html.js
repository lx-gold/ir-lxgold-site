module.exports = function buildModelBrandPanelHtml
(
    {
        selectBrandHtmlRender,
        selectMedalHtmlRender,
        modelListHtmlRender
    }
)
    {
        if
        (
            !selectBrandHtmlRender
        )
            {
                throw new Error('buildModelPanelHtml must have selectBrandHtmlRender')
            }

        if
        (
            !selectMedalHtmlRender
        )
            {
                throw new Error('buildModelPanelHtml must have selectMedalHtmlRender')
            }
        if
        (
            !modelListHtmlRender
        )
            {
                throw new Error('buildModelPanelHtml must have modelListHtmlRender')
            }
        return async function modelBrandPanelHtml
        (
            {
                brandList,
                selectedBrand,
                medalList,
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
                    !selectedBrand
                )
                    {
                        throw new Error('modelPanelHtml must have selectedBrand')
                    }
                
                if
                (
                    !medalList
                )
                    {
                        throw new Error('modelPanelHtml must have medalList')
                    }
                if
                (
                    !modelList
                )
                    {
                        throw new Error('modelPanelHtml must have modelList')
                    }

                const selectBrandHtmlContent = await selectBrandHtmlRender(
                    {
                        brandList: brandList,
                        selectedBrand:selectedBrand
                    }
                );

                const selectMedalHtmlConetent  = await selectMedalHtmlRender(
                    {
                        medalList: medalList,
                        brand : selectedBrand,
                    }
                )

                const modelListHtmlContent = await modelListHtmlRender (
                    {
                        modelList: modelList
                    }
                );

                
                
                const content = `
                    <nav>
                        <ul>
                            <li>
                                ${selectBrandHtmlContent}
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </nav>
                    `+ selectMedalHtmlConetent + modelListHtmlContent;

                return content;
                
            }
    }