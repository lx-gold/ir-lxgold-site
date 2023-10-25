module.exports = function buildCreateBrandAmpPage
(
    {
        brandModelListPageAmpRender,
        saveFile
    }
)
    {
        if
        (
            !brandModelListPageAmpRender
        )
            {
                throw new Error('buildCreateBrandAmpPage must have brandModelListPageAmpRender');
            }
        if
        (
            !saveFile
        )
            {
                throw new Error('buildCreateBrandAmpPage must have saveFile');
            }


        return async function createBrandAmpPage
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
                        throw new Error('createBrandPage must have brandList');
                    }
                if
                (
                    !brand
                )
                    {
                        throw new Error('createBrandPage must have brand');
                    }

                if
                (
                    !modelList
                )
                    {
                        throw new Error('createBrandPage must have modelList');
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('createBrandPage must have medalList');
                    }

                try
                {
                    

                    const brandModelListPageAmpContent = await brandModelListPageAmpRender(
                        {
                            modelList: modelList,
                            brandList: brandList,
                            selectedBrand: brand,
                            medalList: medalList
                        }

                    );
                    
                    await saveFile(
                        {
                            directoryList : ['amp','models','brand',brand.id],
                            content: brandModelListPageAmpContent,
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