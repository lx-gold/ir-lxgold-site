module.exports = function buildBrandModelListAmpPage
(
    {
        headAmpTag,
        modelBrandPanelAmpRender,
        minifyCss,
        headerAmp
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

        if
        (
            !headerAmp
        )
            {
                throw new Error('buildBrandModelListAmpPage must have headerAmp')
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

                const headerContent = headerAmp()

                const h1Content = `جاسوئیچی طلا ${selectedBrand.title_fa}`
                
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
                            ${headerContent}
                            <main>
                                <h1>
                                    ${h1Content}
                                </h1>
                                ${modelPanleAmpContent}
                            </main>
                        </body>
                    </html>
                `
            }
    }