module.exports = function buildBrandMedalChainModelListAmpPage
(
    {
        headAmpTag,
        modelBrandMedalChainPanelAmpRender,
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
                throw new Error('buildBrandMedalChainModelListAmpPage must have headAmpTag')
            }

        if
        (
            !modelBrandMedalChainPanelAmpRender
        )
            {
                throw new Error('buildBrandMedalChainModelListAmpPage must have modelBrandMedalChainPanelAmpRender')
            }

        if
        (
            !minifyCss
        )
            {
                throw new Error('buildBrandMedalChainModelListAmpPage must have minifyCss')
            }

        if
        (
            !headerAmp
        )
            {
                throw new Error('buildBrandMedalChainModelListAmpPage must have headerAmp')
            }

            
        
        
        return async function brandMedalChainModelListAmpPage
        (
            {
                modelList,
                brandList,
                selectedBrand,
                medalList,
                selectedMedal,
                chainList,
                selectedChain,
                ringList
            }
        )
            {
                if
                (
                    !modelList
                )
                    {
                        throw new Error('brandMedalChainModelListAmpPage must have modelList')
                    }

                if
                (
                    !brandList
                )
                    {
                        throw new Error('brandMedalChainModelListAmpPage must have brandList')
                    }

                if
                (
                    !selectedBrand
                )
                    {
                        throw new Error('brandMedalChainModelListAmpPage must have selectedBrand')
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('brandMedalChainModelListAmpPage must have medalList')
                    }

                if
                (
                    !selectedMedal
                )
                    {
                        throw new Error('brandMedalChainModelListAmpPage must have selectedMedal')
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('brandMedalChainModelListAmpPage must have chainList')
                    }

                if
                (
                    !selectedChain
                )
                    {
                        throw new Error('brandMedalChainModelListAmpPage must have selectedChain')
                    }

                if
                (
                    !ringList
                )
                    {
                        throw new Error('brandMedalChainModelListAmpPage must have ringList')
                    }
                    
                const keywordList = [
                    `جاسوئیچی طلا`
                ];  
                
                const minifiedCss = await minifyCss(
                    {
                        fileName: 'brand-medal-chain-model-list.css'
                    }
                ); 

                const headAmpContent = await headAmpTag(
                    {
                        keywordList :keywordList,
                        minifiedCss: minifiedCss,
                        brand: selectedBrand,
                        medal: selectedMedal,
                        chain: selectedChain

                    }
                );

                const modelBrandMedalChainPanelAmpContent = await modelBrandMedalChainPanelAmpRender(
                    {
                        brandList: brandList,
                        selectedBrand: selectedBrand,
                        modelList: modelList,
                        medalList: medalList,
                        selectedMedal: selectedMedal,
                        chainList: chainList,
                        selectedChain: selectedChain,
                        ringList: ringList
                    }
                );

                const headerContent = headerAmp();

                const h1Content = `جاسوئیچی طلا ${selectedBrand.title_fa} مدل ${selectedMedal.title_fa} با زنجیر ${selectedChain.title_fa}`
                
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
                                ${modelBrandMedalChainPanelAmpContent}
                            </main>
                        </body>
                    </html>
                `
            }
    }