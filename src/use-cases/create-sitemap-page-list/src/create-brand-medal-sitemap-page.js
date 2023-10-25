module.exports = function buildCreateBrandMedalSitemapPage
(
    {
        getAllBrandDB,
        getAllMedalByBrandDB,
        saveFile,
        siteMapPageRender,
        brandMedalSitemapPanle
    }
)
    {
        if
        (
            !getAllBrandDB
        )
            {
                throw new Error('buildCreateBrandSitemapPages must have getAllBrandDB');
            }

        if
        (
            !getAllMedalByBrandDB
        )
            {
                throw new Error('buildCreateBrandSitemapPages must have getAllMedalByBrandDB');
            }

        if
        (
            !saveFile
        )
            {
                throw new Error('buildCreateBrandSitemapPages must have saveFile');
            }

        if
        (
            !siteMapPageRender
        )
            {
                throw new Error('buildCreateBrandSitemapPages must have siteMapPageRender');
            }

        if
        (
            !brandMedalSitemapPanle
        )
            {
                throw new Error('buildCreateBrandSitemapPages must have brandMedalSitemapPanle');
            }
        return async function createBrandMedalSitemapPage
        ()
            {

                const brandList = await getAllBrandDB();

                const brandMedalSitemapPanleConentList = await Promise.all(
                    brandList.map(
                        async (brand) => 
                            {
                                const brandMedalList = await getAllMedalByBrandDB(
                                    {
                                        brandId: brand.id
                                    }
                                );

                                const brandMedalSitemapPanleConent = await brandMedalSitemapPanle(
                                    {
                                        brand: brand,
                                        medalList: brandMedalList
                                    }
                                );

                                return brandMedalSitemapPanleConent

                            }
                    )
                );

                const brandMedalSitemapPanleConentListJoined = brandMedalSitemapPanleConentList.join('');

                const siteMapPageRenderContent = await siteMapPageRender(
                    {
                        siteMapUrlContent: brandMedalSitemapPanleConentListJoined
                    }
                )


                await saveFile(
                    {
                        directoryList : ['sitemap'],
                        content: siteMapPageRenderContent,
                        fileName:'brand-medal.xml'
                    }
                )

            }
    }