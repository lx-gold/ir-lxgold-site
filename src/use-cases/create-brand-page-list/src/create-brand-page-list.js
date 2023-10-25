module.exports = function buildCreateBrandPageList
(
    {
        createBrandHtmlPage,
        createBrandAmpPage,
        getAllBrandDB,
        getAllModelListByBrandDB,
        getAllMedalByBrandDB
    }
)
    {
        if
        (
            !createBrandHtmlPage
        )
            {
                throw new Error('buildCreateBrandPageList must have createBrandHtmlPage');
            }

        if
        (
            !createBrandAmpPage
        )
            {
                throw new Error('buildCreateBrandPageList must have createBrandAmpPage');
            }

        if
        (
            !getAllBrandDB
        )
            {
                throw new Error('buildCreateBrandPageList must have createBrandPage');
            }

        if
        (
            !getAllModelListByBrandDB
        )
            {
                throw new Error('buildCreateBrandPageList must have getAllModelListByBrandDB');
            }

        if
        (
            !getAllMedalByBrandDB
        )
            {
                throw new Error('buildCreateBrandPageList must have getAllMedalByBrandDB');
            }

        return async function createBrandPageList
        ()
            {
                const brandList = await getAllBrandDB();

                

                


                brandList.forEach(
                    async brand =>
                        {
                            const modelList = await getAllModelListByBrandDB(
                                {
                                    brandId:brand.id
                                }
                            );
                            
                            const brandMedalList = await getAllMedalByBrandDB
                            (
                                {
                                    brandId: brand.id
                                }
                            );

                            await createBrandHtmlPage(
                                {
                                    brand: brand,
                                    brandList: brandList,
                                    modelList: modelList,
                                    medalList: brandMedalList,
                                }
                            );

                            
                            await createBrandAmpPage(
                                {
                                    brand: brand,
                                    brandList: brandList,
                                    modelList: modelList,
                                    medalList: brandMedalList,
                                }
                            );
                        }
                );
            }
    }