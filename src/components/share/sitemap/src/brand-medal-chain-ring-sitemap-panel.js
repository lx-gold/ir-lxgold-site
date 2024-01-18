module.exports = function buildBrandMedalChainRingSitemapPanle
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
                throw new Error('buildBrandMedalChainRingSitemapPanle must have siteMapListRender')
            }
        
        const brandMedalChainRingListPriority = 0.60;
        const lastmod = '2023-01-10T08:45:59+00:00'
        return async function brandMedalChainRingSitemapPanle
        (
            {
                brand,
                medal,
                chain,
                ringList
            }
        )
            {
                
                if
                (
                    !brand
                )
                    {
                        throw new Error('brandMedalChainRingSitemapPanle must have brand')
                    }

                if
                (
                    !medal
                )
                    {
                        throw new Error('brandMedalChainRingSitemapPanle must have medal')
                    }

                if
                (
                    !chain
                )
                    {
                        throw new Error('brandMedalChainRingSitemapPanle must have chain')
                    }

                if
                (
                    !ringList
                )
                    {
                        throw new Error('brandMedalChainRingSitemapPanle must have ringList')
                    }

                const brandMedalChainRingUrlList = 
                Array.from(
                    ringList
                ).map(
                    (ring) => 
                        {
                            const result = `https://lxgold.ir/models/brand/${brand.id}/medal/${medal.id}/chain/${chain.id}/ring/${ring.id}/`;

                            return result;
                        }
                );

                const result = await siteMapListRender(
                    {
                        urlList: brandMedalChainRingUrlList,
                        lastmod: lastmod,
                        priority: brandMedalChainRingListPriority
                    }
                );

                return result;


            }
    }