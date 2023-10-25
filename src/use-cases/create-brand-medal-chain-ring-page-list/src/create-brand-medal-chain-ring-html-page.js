module.exports = function buildCreateBrandMedalChainRingHtmlPage
(
    {
        brandMedalChainRingModelListHtmlPageRender,
        saveFile,
    }
)
    {
        if
        (
            !brandMedalChainRingModelListHtmlPageRender
        )
            {
                throw new Error('buildCreateBrandMedalChainRingHtmlPage must have brandMedalChainRingModelListHtmlPageRender');
            }
        if
        (
            !saveFile
        )
            {
                throw new Error('buildCreateBrandMedalChainRingHtmlPage must have saveFile');
            }

        return async function createBrandMedalChainRingHtmlPage
        (
            {
                brandList,
                brand,
                medalList,
                medal,
                chainList,
                chain,
                ringList,
                ring,
                modelList
            }
        )
            {
                if
                (
                    !brandList
                )
                    {
                        throw new Error('createBrandMedalChainRingHtmlPage must have brandList');
                    }
                if
                (
                    !brand
                )
                    {
                        throw new Error('createBrandMedalChainRingHtmlPage must have brand');
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('createBrandMedalChainRingHtmlPage must have medalList');
                    }
                if
                (
                    !medal
                )
                    {
                        throw new Error('createBrandMedalChainRingHtmlPage must have medal');
                    }

                if
                (
                    !modelList
                )
                    {
                        throw new Error('createBrandMedalChainRingHtmlPage must have modelList');
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('createBrandMedalChainRingHtmlPage must have chainList');
                    }

                if
                (
                    !chain
                )
                    {
                        throw new Error('createBrandMedalChainRingHtmlPage must have chain');
                    }

                if
                (
                    !ringList
                )
                    {
                        throw new Error('createBrandMedalChainRingHtmlPage must have ringList');
                    }

                if
                (
                    !ring
                )
                    {
                        throw new Error('createBrandMedalChainRingHtmlPage must have ring');
                    }

                try
                {
                    
                    const brandMedalChainRingModelListHtmlPageContent = await brandMedalChainRingModelListHtmlPageRender(
                        {
                            modelList: modelList,
                            brandList: brandList,
                            selectedBrand: brand,
                            medalList: medalList,
                            selectedMedal: medal,
                            chainList:chainList,
                            selectedChain: chain,
                            ringList: ringList,
                            selectedRing: ring
                        }

                    );
                    
                    await saveFile(
                        {
                            directoryList : ['models','brand',brand.id,'medal',medal.id,'chain',chain.id,'ring',ring.id],
                            content: brandMedalChainRingModelListHtmlPageContent,
                            fileName:'index.html'
                        }
                    )
                }
                catch
                (
                    error
                )
                    {
                        throw error;        
                    }
            }
    }