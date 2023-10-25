module.exports = function buildBrandSitemapPanle
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
                throw new Error('buildBrandSitemapPanle must have siteMapListRender')
            }
        
        const brandListPriority = 0.90;
        const lastmod = '2023-01-10T08:45:59+00:00'
        return async function brandSitemapPanle
        (
            {
                brandList
            }
        )
            {
                
                if
                (
                    !brandList
                )
                    {
                        throw new Error('brandSitemapPanle must have brandList')
                    }

                const brandUrlList = brandList.map(
                    (brand) => 
                        {
                            const result = `https://lxgold.ir/models/brand/${brand.id}/`;

                            return result;
                        }
                );

                const result = await siteMapListRender(
                    {
                        urlList: brandUrlList,
                        lastmod: lastmod,
                        priority: brandListPriority
                    }
                );

                return result;


            }
    }