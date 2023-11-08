module.exports = function buildBrandMedalModelListAmpPage
(
    {
        headAmpTag,
        modelBrandMedalPanelAmpRender,
        minifyCss
    }
)
    {
        if
        (
            !headAmpTag
        )
            {
                throw new Error('buildBrandMedalModelListAmpPage must have headAmpTag')
            }

        if
        (
            !modelBrandMedalPanelAmpRender
        )
            {
                throw new Error('buildBrandMedalModelListAmpPage must have modelBrandMedalPanelAmpRender')
            }

        if
        (
            !minifyCss
        )
            {
                throw new Error('buildBrandMedalModelListAmpPage must have minifyCss')
            }

        const keywordList = [
            `جاسوئیچی طلا`
        ];
        return async function brandMedalModelListAmpPage
        (
            {
                modelList,
                brandList,
                selectedBrand,
                medalList,
                medal,
                chainList
            }
        )
            {
                if
                (
                    !modelList
                )
                    {
                        throw new Error('brandMedalModelListAmpPage must have modelList')
                    }

                if
                (
                    !brandList
                )
                    {
                        throw new Error('brandMedalModelListAmpPage must have brandList')
                    }

                if
                (
                    !selectedBrand
                )
                    {
                        throw new Error('brandMedalModelListAmpPage must have selectedBrand')
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('brandMedalModelListAmpPage must have medalList')
                    }

                if
                (
                    !medal
                )
                    {
                        throw new Error('brandMedalModelListAmpPage must have medal')
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('brandMedalModelListAmpPage must have chainList')
                    }
                
                const minifiedCss = await minifyCss(
                    {
                        fileName: 'brand-medal-model-list.css'
                    }
                );

                const headAmpContent = await headAmpTag(
                    {
                        keywordList :keywordList,
                        minifiedCss: minifiedCss,
                        brand: selectedBrand,
                        medal:medal

                    }
                );

                const modelMedalPanleAmpContent = await modelBrandMedalPanelAmpRender(
                    {
                        brandList: brandList,
                        selectedBrand: selectedBrand,
                        medalList: medalList,
                        selectedMedal:medal,
                        chainList: chainList,
                        modelList: modelList,
                    }
                );

                const h1Content = `جاسوئیچی طلا ${selectedBrand.title_fa} مدل ${medal.title_fa}`
                
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
                                    ${h1Content}
                                </h1>
                                ${modelMedalPanleAmpContent}
                            </main>
                        </body>
                    </html>
                `
            }
    }