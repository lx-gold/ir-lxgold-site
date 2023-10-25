module.exports = function buildSiteMapList
(
    {
        sitemapItemRender
    }
)
    {
        if
        (
            !sitemapItemRender
        )
            {
                throw new Error('buildSiteMapList must have sitemapItemRender')
            }

        const lastmod = '2023-01-10T08:45:59+00:00';
        
        
        
        
        
        const serviceHowToPriority = 0.60;
        return async function siteMapList
        (
            {
                urlList,
                lastmod,
                priority
            }
        )
            {
                if
                (
                    !urlList
                )
                    {
                        throw new Error('siteMapList must have urlList')
                    }

                if
                (
                    !lastmod
                )
                    {
                        throw new Error('siteMapList must have lastmod')
                    }

                if
                (
                    !priority
                )
                    {
                        throw new Error('siteMapList must have priority')
                    }

                const siteMapItemList = await Promise.all(
                    urlList.map(
                        async (url) => 
                            {
                                const result =  await sitemapItemRender(
                                    {
                                        loc: url,
                                        lastmod: lastmod,
                                        priority: priority
                                    }
                                );

                                return result;
                            }
                    )
                ) ;

                const sitemapItemRenderContent = siteMapItemList.join(' ')

                return sitemapItemRenderContent;
            }
    }