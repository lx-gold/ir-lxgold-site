module.exports = function buildCreateBrandHtmlPage
(
    {
        brandModelListPageHtmlRender,
        saveFile
    }
)
    {
        if
        (
            !brandModelListPageHtmlRender
        )
            {
                throw new Error('buildCreateBrandHtmlPage must have brandModelListPageHtmlRender');
            }
        if
        (
            !saveFile
        )
            {
                throw new Error('buildCreateBrandHtmlPage must have saveFile');
            }


        return async function createBrandHtmlPage
        (
            {
                brandList,
                brand,
                modelList,
                medalList
            }
        )
            {
                if
                (
                    !brandList
                )
                    {
                        throw new Error('createBrandHtmlPage must have brandList');
                    }
                if
                (
                    !brand
                )
                    {
                        throw new Error('createBrandHtmlPage must have brand');
                    }

                if
                (
                    !modelList
                )
                    {
                        throw new Error('createBrandHtmlPage must have modelList');
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('createBrandHtmlPage must have medalList');
                    }

                try
                {
                    

                    const brandModelListPageHtmlContent = await brandModelListPageHtmlRender(
                        {
                            modelList: modelList,
                            brandList: brandList,
                            selectedBrand: brand,
                            medalList: medalList
                        }

                    );
                    
                    await saveFile(
                        {
                            directoryList : ['models','brand',brand.id],
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