module.exports = function buildCreateBrandMedalChainRingSitemapPage
(
    {
        getAllBrandDB,
        getAllMedalByBrandDB,
        getAllChainByBrandAndMedalDB,
        getAllRingByBrandAndMedalAndChainDB,
        saveFile,
        siteMapPageRender,
        brandMedalChainRingSitemapPanle
    }
)
    {
        if
        (
            !getAllBrandDB
        )
            {
                throw new Error('buildCreateBrandMedalChainRingSitemapPage must have getAllBrandDB');
            }

        if
        (
            !getAllMedalByBrandDB
        )
            {
                throw new Error('buildCreateBrandMedalChainRingSitemapPage must have getAllMedalByBrandDB');
            }

            
        if
        (
            !getAllChainByBrandAndMedalDB
        )
            {
                throw new Error('buildCreateBrandMedalChainRingSitemapPage must have getAllChainByBrandAndMedalDB');
            }

        if
        (
            !getAllRingByBrandAndMedalAndChainDB
        )
            {
                throw new Error('buildCreateBrandMedalChainRingSitemapPage must have getAllRingByBrandAndMedalAndChainDB');
            }

            

        if
        (
            !saveFile
        )
            {
                throw new Error('buildCreateBrandMedalChainRingSitemapPage must have saveFile');
            }

        if
        (
            !siteMapPageRender
        )
            {
                throw new Error('buildCreateBrandMedalChainRingSitemapPage must have siteMapPageRender');
            }

        if
        (
            !brandMedalChainRingSitemapPanle
        )
            {
                throw new Error('buildCreateBrandMedalChainRingSitemapPage must have brandMedalChainRingSitemapPanle');
            }
        return async function createBrandMedalChainRingSitemapPage
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


                                                return await Promise.all(
                                                    brandMedalChainList.map(
                                                        async (chain) => 
                                                            {
                                                                const brandMedalChainRingList = await getAllRingByBrandAndMedalAndChainDB(
                                                                    {
                                                                        brandId: brand.id,
                                                                        medalId: medal.id,
                                                                        chainId: chain.id 
                                                                    }
                                                                );
    
                                                                const brandMedalChainRingChainSitemapPanleContent = await brandMedalChainRingSitemapPanle(
                                                                    {
                                                                        brand: brand,
                                                                        medal: medal,
                                                                        chain: chain,
                                                                        ringList: brandMedalChainRingList
                                                                    }
                                                                );
                
                                
                                                                return brandMedalChainRingChainSitemapPanleContent;
                                                            }
                                                    )
                                                )
                                                
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
                        fileName:'brand-medal-chain-ring.xml'
                    }
                )

            }
    }