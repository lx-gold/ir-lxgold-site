module.exports = function buildBrandMedalChainSitemapPanle
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
                throw new Error('buildBrandMedalChainSitemapPanle must have siteMapListRender')
            }
        
        const brandMedalChainListPriority = 0.70;
        const lastmod = '2023-01-10T08:45:59+00:00'
        return async function brandMedalChainSitemapPanle
        (
            {
                brand,
                medal,
                chainList
            }
        )
            {
                
                if
                (
                    !brand
                )
                    {
                        throw new Error('brandMedalChainSitemapPanle must have brand')
                    }

                if
                (
                    !medal
                )
                    {
                        throw new Error('brandMedalChainSitemapPanle must have medal')
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('brandMedalChainSitemapPanle must have chainList')
                    }

                const brandMedalChainUrlList = 
                Array.from(
                    chainList
                ).map(
                    (chain) => 
                        {
                            const result = `https://lxgold.ir/models/brand/${brand.id}/medal/${medal.id}/chain/${chain.id}/`;

                            return result;
                        }
                );

                const result = await siteMapListRender(
                    {
                        urlList: brandMedalChainUrlList,
                        lastmod: lastmod,
                        priority: brandMedalChainListPriority
                    }
                );

                return result;


            }
    }