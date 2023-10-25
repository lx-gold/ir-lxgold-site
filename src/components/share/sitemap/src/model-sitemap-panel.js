module.exports = function buildModelSitemapPanle
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
                throw new Error('buildModelSitemapPanle must have siteMapListRender')
            }
        
        const linksUrlListPriority = 1.0;
        const lastmod = '2023-01-10T08:45:59+00:00'
        return async function modelSitemapPanle
        (
            {
                modelList
            }
        )
            {
                
                if
                (
                    !modelList
                )
                    {
                        throw new Error('modelSitemapPanle must have modelList')
                    }

                const modelUrlList = modelList.map(
                    (model) => 
                        {
                            const result = `https://lxgold.ir/models/${model.id}/`;

                            return result;
                        }
                );

                const result = await siteMapListRender(
                    {
                        urlList: modelUrlList,
                        lastmod: lastmod,
                        priority: linksUrlListPriority
                    }
                );

                return result;


            }
    }