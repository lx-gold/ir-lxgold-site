module.exports = function buildCreateBrandMedalChainRingPageList
(
    {
        createBrandMedalChainRingHtmlPage,
        createBrandMedalChainRingAmpPage,
        getAllBrandDB,
        getAllMedalByBrandDB,
        getAllChainByBrandAndMedalDB,
        getAllRingByBrandAndMedalAndChainDB,
        getAllModelListByBrandAndMedalAndChainAndRingDB
    }
)
    {
        if
        (
            !createBrandMedalChainRingHtmlPage
        )
            {
                throw new Error('buildCreateBrandMedalChainRingPageList must have createBrandMedalChainRingHtmlPage');
            }

        if
        (
            !createBrandMedalChainRingAmpPage
        )
            {
                throw new Error('buildCreateBrandMedalChainRingPageList must have createBrandMedalChainRingAmpPage');
            }
            

        if
        (
            !getAllBrandDB
        )
            {
                throw new Error('buildCreateBrandMedalChainRingPageList must have createBrandPage');
            }

        if
        (
            !getAllMedalByBrandDB
        )
            {
                throw new Error('buildCreateBrandMedalChainRingPageList must have getAllMedalByBrandDB');
            }

        if
        (
            !getAllChainByBrandAndMedalDB
        )
            {
                throw new Error('buildCreateBrandMedalChainRingPageList must have getAllChainByBrandAndMedalDB');
            }

        if
        (
            !getAllRingByBrandAndMedalAndChainDB
        )
            {
                throw new Error('buildCreateBrandMedalChainRingPageList must have getAllRingByBrandAndMedalAndChainDB');
            }

        if
        (
            !getAllModelListByBrandAndMedalAndChainAndRingDB
        )
            {
                throw new Error('buildCreateBrandMedalChainRingPageList must have getAllModelListByBrandAndMedalAndChainAndRingDB');
            }

        return async function createBrandMedalChainRingPageList
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

                                                const brandMedalChainRingList = await getAllRingByBrandAndMedalAndChainDB(
                                                    {
                                                        brandId: brand.id,
                                                        medalId: medal.id,
                                                        chainId: chain.id
                                                    }
                                                );

                                                brandMedalChainRingList.forEach(
                                                    async ring =>
                                                        {

                                                            const modelList = await getAllModelListByBrandAndMedalAndChainAndRingDB(
                                                                {
                                                                    brandId:brand.id,
                                                                    medalId: medal.id,
                                                                    chainId:chain.id,
                                                                    ringId: ring.id
                                                                }
                                                            );
                    
                                                            await createBrandMedalChainRingHtmlPage(
                                                                {
                                                                    brandList: brandList,
                                                                    brand: brand,
                                                                    medalList: brandMedalList,
                                                                    medal: medal,
                                                                    chainList: brandMedalChainList,
                                                                    chain: chain,
                                                                    ringList:brandMedalChainRingList,
                                                                    ring:ring,
                                                                    modelList: modelList
                                                                }
                                                            );

                                                            
                                                            await createBrandMedalChainRingAmpPage(
                                                                {
                                                                    brandList: brandList,
                                                                    brand: brand,
                                                                    medalList: brandMedalList,
                                                                    medal: medal,
                                                                    chainList: brandMedalChainList,
                                                                    chain: chain,
                                                                    ringList:brandMedalChainRingList,
                                                                    ring:ring,
                                                                    modelList: modelList
                                                                }
                                                            );

                                                        }
                                                )

                                                

                                            }
                                    );

                                    
                                }
                        )

                    }
            );
        }
    }