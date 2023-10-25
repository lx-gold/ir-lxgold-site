module.exports = function buildBrandModelListHtmlPage
(
    {
        headTag,
        modelBrandPanelHtmlRender
    }
)
    {
        if
        (
            !headTag
        )
            {
                throw new Error('buildBrandModelListHtmlPage must have headTag')
            }

        if
        (
            !modelBrandPanelHtmlRender
        )
            {
                throw new Error('buildBrandModelListHtmlPage must have modelBrandPanelHtmlRender')
            }
        
        const keywordList = [
            `جاسوئیچی طلا`
        ];
        return async function brandModelListPage
        (
            {
                modelList,
                brandList,
                selectedBrand,
                medalList
            }
        )
            {
                if
                (
                    !modelList
                )
                    {
                        throw new Error('brandModelListPage must have modelList')
                    }

                if
                (
                    !brandList
                )
                    {
                        throw new Error('brandModelListPage must have brandList')
                    }

                if
                (
                    !selectedBrand
                )
                    {
                        throw new Error('brandModelListPage must have selectedBrand')
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('brandModelListPage must have medalList')
                    }

                const headContent = await headTag(
                    {
                        keywordList :keywordList,
                        cssFileName:'brand-model-list.css',
                        brand: selectedBrand

                    }
                );

                const modelPanleHtmlContent = await modelBrandPanelHtmlRender(
                    {
                        brandList: brandList,
                        selectedBrand: selectedBrand,
                        modelList: modelList,
                        medalList: medalList
                    }
                );
                
                return `
                    <!doctype html>
                    <html lang='fa'>
                        <head>
                            ${headContent}
                        </head>
                        <body>
                            <main>
                                <h1>
                                    جاسونیچی طلا
                                </h1>
                                ${modelPanleHtmlContent}
                            </main>
                        </body>
                    </html>
                `
            }
    }