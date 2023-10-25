
module.exports = function buildCreateSitemapPageList
(
    {
        createModelSitemapPage,
        createBrandSitemapPages,
        createBrandMedalSitemapPage,
        createBrandMedalChainSitemapPage,
        createBrandMedalChainRingSitemapPage
    }
)
    {
        if
        (
            !createModelSitemapPage
        )
            {
                throw new Error('buildCreateSitemapPageList must have createModelSitemapPage');
            }

        if
        (
            !createBrandSitemapPages
        )
            {
                throw new Error('buildCreateSitemapPageList must have createBrandSitemapPages');
            }

        if
        (
            !createBrandMedalSitemapPage
        )
            {
                throw new Error('buildCreateSitemapPageList must have createBrandMedalSitemapPage');
            }

        if
        (
            !createBrandMedalChainSitemapPage
        )
            {
                throw new Error('buildCreateSitemapPageList must have createBrandMedalChainSitemapPage');
            }

            
        if
        (
            !createBrandMedalChainRingSitemapPage
        )
            {
                throw new Error('buildCreateSitemapPageList must have createBrandMedalChainRingSitemapPage');
            }

        return async function createSitemapPageList
        ()
            {
                const createModelSitemapPageResult = await createModelSitemapPage();
                const createBrandSitemapPagesResult = await createBrandSitemapPages();
                const createBrandMedalSitemapPageResult = await createBrandMedalSitemapPage();
                const createBrandMedalChainSitemapPageResult = await createBrandMedalChainSitemapPage();
                const createBrandMedalChainRingSitemapPageResult = await createBrandMedalChainRingSitemapPage();

            }
    }