module.exports = function buildBrandModelListAmpPage
(
    {
        headAmpTag,
        modelBrandPanelAmpRender,
        minifyCss
    }
)
    {
        if
        (
            !headAmpTag
        )
            {
                throw new Error('buildBrandModelListAmpPage must have headAmpTag')
            }

        if
        (
            !modelBrandPanelAmpRender
        )
            {
                throw new Error('buildBrandModelListAmpPage must have modelBrandPanelAmpRender')
            }

        if
        (
            !minifyCss
        )
            {
                throw new Error('buildBrandModelListAmpPage must have minifyCss')
            }
        
        const keywordList = [
            `جاسوئیچی طلا`
        ];
        return async function brandModelListAmpPage
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
                        throw new Error('brandModelListAmpPage must have modelList')
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

                const minifiedCss = await minifyCss(
                    {
                        fileName: 'brand-model-list.css'
                    }
                );

                const headAmpContent = await headAmpTag(
                    {
                        keywordList :keywordList,
                        minifiedCss:minifiedCss,
                        brand: selectedBrand
                    }
                );

                const modelPanleAmpContent = await modelBrandPanelAmpRender(
                    {
                        brandList: brandList,
                        selectedBrand: selectedBrand,
                        modelList: modelList,
                        medalList: medalList
                    }
                );
                
                return `
                    <!doctype html>
                    <html ⚡="" lang="fa" dir="rtl">
                        <head>
                            ${headAmpContent}
                        </head>
                        <body>
                            <amp-analytics type="gtag" data-credentials="include">
                                <script type="application/json">
                                {
                                "vars" : {
                                    "gtag_id": "G-L4CJQDJLS4",
                                    "config" : {
                                    "G-L4CJQDJLS4": { "groups": "default" }
                                    },
                                    "triggers": {
                                    "trackPageview": {
                                        "on": "visible",
                                        "request": "pageview"
                                    }
                                    }
                                }
                                }
                                </script>
                            </amp-analytics>
                            <main>
                                <h1>
                                    جاسونیچی طلا
                                </h1>
                                ${modelPanleAmpContent}
                            </main>
                        </body>
                    </html>
                `
            }
    }