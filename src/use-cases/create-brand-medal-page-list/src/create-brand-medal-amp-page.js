module.exports = function buildCreateBrandMedalAmpPage
(
    {
        brandMedalModelListPageAmpRender,
        saveFile,
    }
)
    {
        if
        (
            !brandMedalModelListPageAmpRender
        )
            {
                throw new Error('buildCreateBrandMedalAmpPage must have brandMedalModelListPageAmpRender');
            }
        if
        (
            !saveFile
        )
            {
                throw new Error('buildCreateBrandMedalAmpPage must have saveFile');
            }


        return async function createBrandMedalAmpPage
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
                        throw new Error('createBrandMedalAmpPage must have brandList');
                    }
                if
                (
                    !brand
                )
                    {
                        throw new Error('createBrandMedalAmpPage must have brand');
                    }

                if
                (
                    !modelList
                )
                    {
                        throw new Error('createBrandMedalAmpPage must have modelList');
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('createBrandMedalAmpPage must have medalList');
                    }
                    
                
                if
                (
                    !medal
                )
                    {
                        throw new Error('createBrandMedalAmpPage must have medal');
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('createBrandMedalAmpPage must have chainList');
                    }

                try
                {
                    

                    const brandModelListPageAmpContent = await brandMedalModelListPageAmpRender(
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
                            directoryList : ['amp','models','brand',brand.id,'medal',medal.id],
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