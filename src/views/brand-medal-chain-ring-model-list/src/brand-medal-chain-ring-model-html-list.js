module.exports = function buildBrandMedalChainRingModelListHtmlPage
(
    {
        headTag,
        modelBrandMedalChainRingPanelHtmlRender
    }
)
    {
        if
        (
            !headTag
        )
            {
                throw new Error('buildBrandMedalChainRingModelListHtmlPage must have headTag')
            }

        if
        (
            !modelBrandMedalChainRingPanelHtmlRender
        )
            {
                throw new Error('buildBrandMedalChainRingModelListHtmlPage must have modelBrandMedalChainRingPanelHtmlRender')
            }

        const keywordList = [
            `جاسوئیچی طلا`
        ];

        return async function brandMedalChainRingModelListHtmlPage
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
                        throw new Error('brandMedalChainRingModelListHtmlPage must have modelList')
                    }

                if
                (
                    !brandList
                )
                    {
                        throw new Error('brandMedalChainRingModelListHtmlPage must have brandList')
                    }

                if
                (
                    !selectedBrand
                )
                    {
                        throw new Error('brandMedalChainRingModelListHtmlPage must have selectedBrand')
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('brandMedalChainRingModelListHtmlPage must have medalList')
                    }

                if
                (
                    !selectedMedal
                )
                    {
                        throw new Error('brandMedalChainRingModelListHtmlPage must have selectedMedal')
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('brandMedalChainRingModelListHtmlPage must have chainList')
                    }

                if
                (
                    !selectedChain
                )
                    {
                        throw new Error('brandMedalChainRingModelListHtmlPage must have selectedChain')
                    }

                if
                (
                    !ringList
                )
                    {
                        throw new Error('brandMedalChainRingModelListHtmlPage must have ringList')
                    }

                if
                (
                    !selectedRing
                )
                    {
                        throw new Error('brandMedalChainRingModelListHtmlPage must have selectedRing')
                    }
                    
                    

                const headContent = await headTag(
                    {
                        keywordList :keywordList,
                        cssFileName:'brand-medal-chain-ring-model-list.css',
                        brand: selectedBrand,
                        medal: selectedMedal,
                        chain: selectedChain,
                        ring: selectedRing

                    }
                );

                const modelBrandMedalChainRingPanelHtmlContent = await modelBrandMedalChainRingPanelHtmlRender(
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
                                ${modelBrandMedalChainRingPanelHtmlContent}
                            </main>
                        </body>
                    </html>
                `
            }
    }