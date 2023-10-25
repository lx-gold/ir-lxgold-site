module.exports = function buildCreateSiteMap
(
    {
        sitemapPageRender,
        saveFile,
        getAllBrandDB,
    }
)
    {
        if
        (
            !sitemapPageRender
        )
            {
                throw new Error('buildCreateSiteMap must have sitemapPageRender');
            } 
        if
        (
            !saveFile
        )
            {
                throw new Error('buildCreateSiteMap must have saveFile');
            }

        if
        (
            !getAllBrandDB
        )
            {
                throw new Error('buildCreateSiteMap must have getAllBrandDB');
            }


        return async function createSiteMap
        ()
            {

                const brandList = await getAllBrandDB();

                const sitemapPageRenderContent = await sitemapPageRender(
                    {
                        brandList: brandList,
                        medalList: medalList
                    }

                );
                
                await saveFile(
                    {
                        directoryList : [],
                        content: sitemapPageRenderContent,
                        fileName:'sitemap.xml'
                    }
                )

            }
    }