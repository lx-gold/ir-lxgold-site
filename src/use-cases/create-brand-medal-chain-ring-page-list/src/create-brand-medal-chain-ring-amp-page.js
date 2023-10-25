module.exports = function buildCreateBrandMedalChainRingAmpPage
(
    {
        brandMedalChainRingModelListAmpPageRender,
        saveFile,
    }
)
    {
        if
        (
            !brandMedalChainRingModelListAmpPageRender
        )
            {
                throw new Error('buildCreateBrandMedalChainRingAmpPage must have brandMedalChainRingModelListAmpPageRender');
            }
        if
        (
            !saveFile
        )
            {
                throw new Error('buildCreateBrandMedalChainRingAmpPage must have saveFile');
            }

        return async function createBrandMedalChainRingAmpPage
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
                        throw new Error('createBrandMedalChainRingAmpPage must have brandList');
                    }
                if
                (
                    !brand
                )
                    {
                        throw new Error('createBrandMedalChainRingAmpPage must have brand');
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('createBrandMedalChainRingAmpPage must have medalList');
                    }
                if
                (
                    !medal
                )
                    {
                        throw new Error('createBrandMedalChainRingAmpPage must have medal');
                    }

                if
                (
                    !modelList
                )
                    {
                        throw new Error('createBrandMedalChainRingAmpPage must have modelList');
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('createBrandMedalChainRingAmpPage must have chainList');
                    }

                if
                (
                    !chain
                )
                    {
                        throw new Error('createBrandMedalChainRingAmpPage must have chain');
                    }

                if
                (
                    !ringList
                )
                    {
                        throw new Error('createBrandMedalChainRingAmpPage must have ringList');
                    }

                if
                (
                    !ring
                )
                    {
                        throw new Error('createBrandMedalChainRingAmpPage must have ring');
                    }

                try
                {
                    
                    const brandMedalChainRingModelListAmpPageContent = await brandMedalChainRingModelListAmpPageRender(
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
                            directoryList : ['amp','models','brand',brand.id,'medal',medal.id,'chain',chain.id,'ring',ring.id],
                            content: brandMedalChainRingModelListAmpPageContent,
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