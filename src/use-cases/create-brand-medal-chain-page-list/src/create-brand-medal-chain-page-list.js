module.exports = function buildCreateBrandMedalChainPageList
(
    {
        createBrandMedalChainHtmlPage,
        createBrandMedalChainAmpPage,
        getAllBrandDB,
        getAllMedalByBrandDB,
        getAllChainByBrandAndMedalDB,
        getAllRingByBrandAndMedalChainDB,
        getAllModelListByBrandAndMedalAndChainDB
    }
)
    {
        if
        (
            !createBrandMedalChainHtmlPage
        )
            {
                throw new Error('buildCreateBrandMedalChainPageList must have createBrandMedalChainHtmlPage');
            }

        if
        (
            !createBrandMedalChainAmpPage
        )
            {
                throw new Error('buildCreateBrandMedalChainPageList must have createBrandMedalChainAmpPage');
            }

        if
        (
            !getAllBrandDB
        )
            {
                throw new Error('buildCreateBrandMedalChainPageList must have getAllBrandDB');
            }

        if
        (
            !getAllMedalByBrandDB
        )
            {
                throw new Error('buildCreateBrandMedalChainPageList must have getAllMedalByBrandDB');
            }

        if
        (
            !getAllChainByBrandAndMedalDB
        )
            {
                throw new Error('buildCreateBrandMedalChainPageList must have getAllChainByBrandAndMedalDB');
            }

        if
        (
            !getAllRingByBrandAndMedalChainDB
        )
            {
                throw new Error('buildCreateBrandMedalChainPageList must have getAllRingByBrandAndMedalChainDB');
            }
            

        if
        (
            !getAllModelListByBrandAndMedalAndChainDB
        )
            {
                throw new Error('buildCreateBrandMedalChainPageList must have getAllModelListByBrandAndMedalAndChainDB');
            }
            

        return async function createBrandMedalChainPageList
        ()
            {
                const brandList = await getAllBrandDB();

                brandList.forEach(
                    async brand =>
                        {
                            const brandMedalList = await getAllMedalByBrandDB
                            (
                                {
                                    brandId: brand.id
                                }
                            );

                            brandMedalList.forEach(
                                async medal =>
                                    {

                                        const brandMedalChainList = await getAllChainByBrandAndMedalDB
                                        (
                                            {
                                                brandId: brand.id,
                                                medalId: medal.id
                                            }
                                        );

                                        brandMedalChainList.forEach(
                                            async chain =>
                                                {

                                                    const branMedalChainRingList = await getAllRingByBrandAndMedalChainDB(
                                                        {
                                                            brandId: brand.id,
                                                            medalId: medal.id,
                                                            chainId: chain.id
                                                        }
                                                    )

                                                    const modelList = await getAllModelListByBrandAndMedalAndChainDB(
                                                        {
                                                            brandId:brand.id,
                                                            medalId: medal.id,
                                                            chainId:chain.id
                                                        }
                                                    );
            
                                                    await createBrandMedalChainHtmlPage(
                                                        {
                                                            brandList: brandList,
                                                            brand: brand,
                                                            medalList: brandMedalList,
                                                            medal: medal,
                                                            chainList: brandMedalChainList,
                                                            chain: chain,
                                                            ringList: branMedalChainRingList,
                                                            modelList: modelList
                                                        }
                                                    );

                                                    

                                                    await createBrandMedalChainAmpPage(
                                                        {
                                                            brandList: brandList,
                                                            brand: brand,
                                                            medalList: brandMedalList,
                                                            medal: medal,
                                                            chainList: brandMedalChainList,
                                                            chain: chain,
                                                            ringList: branMedalChainRingList,
                                                            modelList: modelList
                                                        }
                                                    );

                                                }
                                        );

                                        
                                    }
                            )

                        }
                );
            }
    }