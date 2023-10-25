module.exports = function buildCreateBrandSitemapPages
(
    {
        getAllBrandDB,
        saveFile,
        siteMapPageRender,
        brandSitemapPanle
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
            !brandSitemapPanle
        )
            {
                throw new Error('buildCreateBrandSitemapPages must have brandSitemapPanle');
            }
        return async function createBrandSitemapPages
        ()
            {
                const brandList = await getAllBrandDB();

                const brandSitemapPanleConent = await brandSitemapPanle(
                    {
                        brandList: brandList
                    }
                )

                const siteMapPageRenderContentt = await siteMapPageRender(
                    {
                        siteMapUrlContent: brandSitemapPanleConent
                    }
                )


                await saveFile(
                    {
                        directoryList : ['sitemap'],
                        content: siteMapPageRenderContentt,
                        fileName:'brand.xml'
                    }
                )
            }
    }