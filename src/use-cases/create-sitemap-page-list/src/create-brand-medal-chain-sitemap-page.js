module.exports = function buildCreateBrandMedalChainSitemapPage
(
    {
        getAllBrandDB,
        getAllMedalByBrandDB,
        getAllChainByBrandAndMedalDB,
        saveFile,
        siteMapPageRender,
        brandMedalChainSitemapPanle
    }
)
    {
        if
        (
            !getAllBrandDB
        )
            {
                throw new Error('buildCreateBrandMedalChainSitemapPage must have getAllBrandDB');
            }

        if
        (
            !getAllMedalByBrandDB
        )
            {
                throw new Error('buildCreateBrandMedalChainSitemapPage must have getAllMedalByBrandDB');
            }

            
        if
        (
            !getAllChainByBrandAndMedalDB
        )
            {
                throw new Error('buildCreateBrandMedalChainSitemapPage must have getAllChainByBrandAndMedalDB');
            }

        if
        (
            !saveFile
        )
            {
                throw new Error('buildCreateBrandMedalChainSitemapPage must have saveFile');
            }

        if
        (
            !siteMapPageRender
        )
            {
                throw new Error('buildCreateBrandMedalChainSitemapPage must have siteMapPageRender');
            }

        if
        (
            !brandMedalChainSitemapPanle
        )
            {
                throw new Error('buildCreateBrandMedalChainSitemapPage must have brandMedalChainSitemapPanle');
            }
        return async function createBrandMedalChainSitemapPage
        ()
            {

                const brandList = await getAllBrandDB();

                const brandMedalChainSitemapPanleConentList = await Promise.all(
                    brandList.map(
                        async (brand) => 
                            {
                                const brandMedalList = await getAllMedalByBrandDB(
                                    {
                                        brandId: brand.id
                                    }
                                );

                                return await Promise.all(
                                    brandMedalList.map(
                                        async (medal) => 
                                            {
                                                const brandMedalChainList = await getAllChainByBrandAndMedalDB(
                                                    {
                                                        brandId: brand.id,
                                                        medalId: medal.id
                                                    }
                                                );

                                                const brandMedalChainSitemapPanleConent = await brandMedalChainSitemapPanle(
                                                    {
                                                        brand: brand,
                                                        medal: medal,
                                                        chainList:brandMedalChainList
                                                    }
                                                );

                                                return brandMedalChainSitemapPanleConent
                                            }
                                    )
                                );

                            }
                    )
                );

                const brandMedalChainSitemapPanleConentListJoined = brandMedalChainSitemapPanleConentList.join(' ');

                const siteMapPageRenderContent = await siteMapPageRender(
                    {
                        siteMapUrlContent: brandMedalChainSitemapPanleConentListJoined
                    }
                )


                await saveFile(
                    {
                        directoryList : ['sitemap'],
                        content: siteMapPageRenderContent,
                        fileName:'brand-medal-chain.xml'
                    }
                )

            }
    }