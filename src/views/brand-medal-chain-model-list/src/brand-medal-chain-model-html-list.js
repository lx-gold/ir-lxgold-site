module.exports = function buildBrandMedalChainModelListHtmlPage
(
    {
        headTag,
        modelBrandMedalChainPanelHtmlRender,
        headerHtml
    }
)
    {
        if
        (
            !headTag
        )
            {
                throw new Error('buildBrandMedalChainModelListHtmlPage must have headTag')
            }

        if
        (
            !modelBrandMedalChainPanelHtmlRender
        )
            {
                throw new Error('buildBrandMedalChainModelListHtmlPage must have modelBrandMedalChainPanelHtmlRender')
            }
            

        if
        (
            !headerHtml
        )
            {
                throw new Error('buildBrandMedalChainModelListHtmlPage must have headerHtml')
            }

        
        
        return async function brandMedalChainModelListHtmlPage
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
                        throw new Error('brandMedalChainModelListHtmlPage must have modelList')
                    }

                if
                (
                    !brandList
                )
                    {
                        throw new Error('brandMedalChainModelListHtmlPage must have brandList')
                    }

                if
                (
                    !selectedBrand
                )
                    {
                        throw new Error('brandMedalChainModelListHtmlPage must have selectedBrand')
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('brandMedalChainModelListHtmlPage must have medalList')
                    }

                if
                (
                    !selectedMedal
                )
                    {
                        throw new Error('brandMedalChainModelListHtmlPage must have selectedMedal')
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('brandMedalChainModelListHtmlPage must have chainList')
                    }

                if
                (
                    !selectedChain
                )
                    {
                        throw new Error('brandMedalChainModelListHtmlPage must have selectedChain')
                    }

                if
                (
                    !ringList
                )
                    {
                        throw new Error('brandMedalChainModelListHtmlPage must have ringList')
                    }
                    
                const keywordList = [
                    `جاسوئیچی طلا`
                ];   

                const headContent = await headTag(
                    {
                        keywordList :keywordList,
                        cssFileName:'brand-medal-chain-model-list.css',
                        brand: selectedBrand,
                        medal: selectedMedal,
                        chain: selectedChain
                    }
                );

                const modelBrandMedalChainPanelHtmlContent = await modelBrandMedalChainPanelHtmlRender(
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

                const headerContent = headerHtml();

                const h1Content = `جاسوئیچی طلا ${selectedBrand.title_fa} مدل ${selectedMedal.title_fa} با زنجیر ${selectedChain.title_fa}`
                
                return `
                    <!doctype html>
                    <html lang='fa'>
                        <head>
                            ${headContent}
                        </head>
                        <body>
                            ${headerContent}
                            <main>
                                <h1>
                                    ${h1Content}
                                </h1>
                                ${modelBrandMedalChainPanelHtmlContent}
                            </main>
                        </body>
                    </html>
                `
            }
    }