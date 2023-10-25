module.exports = function buildCreateBrandMedalHtmlPage
(
    {
        brandMedalModelListPageHtmlRender,
        saveFile,
    }
)
    {
        if
        (
            !brandMedalModelListPageHtmlRender
        )
            {
                throw new Error('buildCreateBrandMedalHtmlPage must have brandMedalModelListPageHtmlRender');
            }
        if
        (
            !saveFile
        )
            {
                throw new Error('buildCreateBrandMedalHtmlPage must have saveFile');
            }


        return async function createBrandMedalHtmlPage
        (
            {
                brandList,
                brand,
                medalList,
                medal,
                modelList,
                chainList
            }
        )
            {
                if
                (
                    !brandList
                )
                    {
                        throw new Error('createBrandMedalHtmlPage must have brandList');
                    }
                if
                (
                    !brand
                )
                    {
                        throw new Error('createBrandMedalHtmlPage must have brand');
                    }

                if
                (
                    !modelList
                )
                    {
                        throw new Error('createBrandMedalHtmlPage must have modelList');
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('createBrandMedalHtmlPage must have medalList');
                    }
                    
                
                if
                (
                    !medal
                )
                    {
                        throw new Error('createBrandMedalHtmlPage must have medal');
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('createBrandMedalHtmlPage must have chainList');
                    }

                try
                {
                    

                    const brandModelListPageHtmlContent = await brandMedalModelListPageHtmlRender(
                        {
                            modelList: modelList,
                            brandList: brandList,
                            selectedBrand: brand,
                            medalList:medalList,
                            medal:medal,
                            chainList: chainList
                        }

                    );
                    
                    await saveFile(
                        {
                            directoryList : ['models','brand',brand.id,'medal',medal.id],
                            content: brandModelListPageHtmlContent,
                            fileName:'index.html'
                        }
                    )
                }
                catch
                (
                    error
                )
                    {
                        throw error;        
                    }
            }
    }