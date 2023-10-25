module.exports = function buildCreateModelSitemapPage
(
    {
        getAllModelDB,
        saveFile,
        siteMapPageRender,
        modelSitemapPanle
    }
)
    {
        if
        (
            !getAllModelDB
        )
            {
                throw new Error('buildCreateModelSitemapPage must have getAllModelDB');
            }

        if
        (
            !saveFile
        )
            {
                throw new Error('buildCreateModelSitemapPage must have saveFile');
            }

        if
        (
            !siteMapPageRender
        )
            {
                throw new Error('buildCreateModelSitemapPage must have siteMapPageRender');
            }

        if
        (
            !modelSitemapPanle
        )
            {
                throw new Error('buildCreateModelSitemapPage must have modelSitemapPanle');
            }

        return async function createModelSitemapPage
        ()
            {

                const modelList = await getAllModelDB();

                const modelSitemapPanleConent = await modelSitemapPanle(
                    {
                        modelList: modelList
                    }
                )

                const siteMapPageRenderContentt = await siteMapPageRender(
                    {
                        siteMapUrlContent: modelSitemapPanleConent
                    }
                )


                await saveFile(
                    {
                        directoryList : ['sitemap'],
                        content: siteMapPageRenderContentt,
                        fileName:'model.xml'
                    }
                )
            }
    }