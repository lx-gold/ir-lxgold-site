module.exports = function buildBrandMedalChainRingModelListAmpPage
(
    {
        headAmpTag,
        modelBrandMedalChainRingPanelAmpRender,
        minifyCss
    }
)
    {
        if
        (
            !headAmpTag
        )
            {
                throw new Error('buildBrandMedalChainRingModelListAmpPage must have headAmpTag')
            }

        if
        (
            !modelBrandMedalChainRingPanelAmpRender
        )
            {
                throw new Error('buildBrandMedalChainRingModelListAmpPage must have modelBrandMedalChainRingPanelAmpRender')
            }

        if
        (
            !minifyCss
        )
            {
                throw new Error('buildBrandMedalChainRingModelListAmpPage must have minifyCss')
            }

        

        return async function brandMedalChainRingModelListAmpPage
        (
            {
                modelList,
                brandList,
                selectedBrand,
                medalList,
                selectedMedal,
                chainList,
                selectedChain,
                ringList,
                selectedRing
            }
        )
            {
                if
                (
                    !modelList
                )
                    {
                        throw new Error('brandMedalChainRingModelListAmpPage must have modelList')
                    }

                if
                (
                    !brandList
                )
                    {
                        throw new Error('brandMedalChainRingModelListAmpPage must have brandList')
                    }

                if
                (
                    !selectedBrand
                )
                    {
                        throw new Error('brandMedalChainRingModelListAmpPage must have selectedBrand')
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('brandMedalChainRingModelListAmpPage must have medalList')
                    }

                if
                (
                    !selectedMedal
                )
                    {
                        throw new Error('brandMedalChainRingModelListAmpPage must have selectedMedal')
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('brandMedalChainRingModelListAmpPage must have chainList')
                    }

                if
                (
                    !selectedChain
                )
                    {
                        throw new Error('brandMedalChainRingModelListAmpPage must have selectedChain')
                    }

                if
                (
                    !ringList
                )
                    {
                        throw new Error('brandMedalChainRingModelListAmpPage must have ringList')
                    }

                if
                (
                    !selectedRing
                )
                    {
                        throw new Error('brandMedalChainRingModelListAmpPage must have selectedRing')
                    }
                
                const keywordList = [
                    `جاسوئیچی طلا`
                ];
                
                const minifiedCss = await minifyCss(
                    {
                        fileName: 'brand-medal-chain-ring-model-list.css'
                    }
                );    

                const headAmpContent = await headAmpTag(
                    {
                        keywordList :keywordList,
                        minifiedCss: minifiedCss,
                        brand: selectedBrand,
                        medal: selectedMedal,
                        chain: selectedChain,
                        ring: selectedRing

                    }
                );

                const modelBrandMedalChainRingPanelAmpContent = await modelBrandMedalChainRingPanelAmpRender(
                    {
                        brandList: brandList,
                        selectedBrand: selectedBrand,
                        modelList: modelList,
                        medalList: medalList,
                        selectedMedal: selectedMedal,
                        chainList: chainList,
                        selectedChain: selectedChain,
                        ringList: ringList,
                        selectedRing: selectedRing
                    }
                );

                const h1Content = `جاسوئیچی طلا ${selectedBrand.title_fa} مدل ${selectedMedal.title_fa} با زنجیر ${selectedChain.title_fa} و حلقه ی ${selectedRing.title_fa}`
                
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
                                ${modelBrandMedalChainRingPanelAmpContent}
                            </main>
                        </body>
                    </html>
                `
            }
    }