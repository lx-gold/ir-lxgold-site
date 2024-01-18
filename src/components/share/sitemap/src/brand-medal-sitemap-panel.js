module.exports = function buildBrandMedalSitemapPanle
(
    {
        siteMapListRender
    }
)  
    {
        if
        (
            !siteMapListRender
        )
            {
                throw new Error('buildBrandMedalSitemapPanle must have siteMapListRender')
            }
        
        const brandMedalListPriority = 0.80;
        const lastmod = '2023-01-10T08:45:59+00:00'
        return async function brandMedalSitemapPanle
        (
            {
                brand,
                medalList
            }
        )
            {
                
                if
                (
                    !brand
                )
                    {
                        throw new Error('brandMedalSitemapPanle must have brand')
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('brandMedalSitemapPanle must have medalList')
                    }

                const brandMedalUrlList = await Promise.all(
                    Array.from(medalList)
                    .map(
                        (medal) => 
                            {
                                const result = `https://lxgold.ir/models/brand/${brand.id}/medal/${medal.id}/`;

                                return result;
                            }
                    )
                );

                const result = await siteMapListRender(
                    {
                        urlList: brandMedalUrlList,
                        lastmod: lastmod,
                        priority: brandMedalListPriority
                    }
                );

                return result;


            }
    }