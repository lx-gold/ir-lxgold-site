module.exports = function buildCreateBrandMedalChainHtmlPage
(
    {
        brandMedalChainModelListPageHtmlRender,
        saveFile,
    }
)
    {
        if
        (
            !brandMedalChainModelListPageHtmlRender
        )
            {
                throw new Error('buildCreateBrandMedalChainHtmlPage must have brandMedalChainModelListPageHtmlRender');
            }
        if
        (
            !saveFile
        )
            {
                throw new Error('buildCreateBrandMedalChainHtmlPage must have saveFile');
            }

        return async function createBrandMedalChainHtmlPage
        (
            {
                brandList,
                brand,
                medalList,
                medal,
                chainList,
                chain,
                ringList,
                modelList
            }
        )
            {
                if
                (
                    !brandList
                )
                    {
                        throw new Error('createBrandMedalChainHtmlPage must have brandList');
                    }
                if
                (
                    !brand
                )
                    {
                        throw new Error('createBrandMedalChainHtmlPage must have brand');
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('createBrandMedalChainHtmlPage must have medalList');
                    }
                if
                (
                    !medal
                )
                    {
                        throw new Error('createBrandMedalChainHtmlPage must have medal');
                    }

                if
                (
                    !modelList
                )
                    {
                        throw new Error('createBrandMedalChainHtmlPage must have modelList');
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('createBrandMedalChainHtmlPage must have chainList');
                    }

                if
                (
                    !chain
                )
                    {
                        throw new Error('createBrandMedalChainHtmlPage must have chain');
                    }

                if
                (
                    !ringList
                )
                    {
                        throw new Error('createBrandMedalChainHtmlPage must have ringList');
                    }
                    

                try
                {
                    

                    const brandMedalChainModelListPageHtmlContent = await brandMedalChainModelListPageHtmlRender(
                        {
                            modelList: modelList,
                            brandList: brandList,
                            selectedBrand: brand,
                            medalList: medalList,
                            selectedMedal: medal,
                            chainList:chainList,
                            selectedChain: chain,
                            ringList: ringList
                        }

                    );
                    
                    await saveFile(
                        {
                            directoryList : ['models','brand',brand.id,'medal',medal.id,'chain',chain.id],
                            content: brandMedalChainModelListPageHtmlContent,
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