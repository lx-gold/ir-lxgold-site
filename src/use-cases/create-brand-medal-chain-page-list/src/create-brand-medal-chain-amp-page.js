module.exports = function buildCreateBrandMedalChainAmpPage
(
    {
        brandMedalChainModelListPageAmpRender,
        saveFile,
    }
)
    {
        if
        (
            !brandMedalChainModelListPageAmpRender
        )
            {
                throw new Error('buildCreateBrandMedalChainAmpPage must have brandMedalChainModelListPageAmpRender');
            }
        if
        (
            !saveFile
        )
            {
                throw new Error('buildCreateBrandMedalChainAmpPage must have saveFile');
            }

        return async function createBrandMedalChainAmpPage
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
                        throw new Error('createBrandMedalChainAmpPage must have brandList');
                    }
                if
                (
                    !brand
                )
                    {
                        throw new Error('createBrandMedalChainAmpPage must have brand');
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('createBrandMedalChainAmpPage must have medalList');
                    }
                if
                (
                    !medal
                )
                    {
                        throw new Error('createBrandMedalChainAmpPage must have medal');
                    }

                if
                (
                    !modelList
                )
                    {
                        throw new Error('createBrandMedalChainAmpPage must have modelList');
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('createBrandMedalChainAmpPage must have chainList');
                    }

                if
                (
                    !chain
                )
                    {
                        throw new Error('createBrandMedalChainAmpPage must have chain');
                    }

                if
                (
                    !ringList
                )
                    {
                        throw new Error('createBrandMedalChainAmpPage must have ringList');
                    }
                    

                try
                {
                    

                    const brandMedalChainModelListPageAmpContent = await brandMedalChainModelListPageAmpRender(
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
                            directoryList : ['amp','models','brand',brand.id,'medal',medal.id,'chain',chain.id],
                            content: brandMedalChainModelListPageAmpContent,
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