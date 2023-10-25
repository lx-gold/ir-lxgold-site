module.exports = function buildCreateBrandMedalPageList
(
    {
        createBrandMedalHtmlPage,
        createBrandMedalAmpPage,
        getAllBrandDB,
        getAllModelListByBrandAndMedalDB,
        getAllMedalByBrandDB,
        getAllChainByBrandAndMedalDB
    }
)
    {
        if
        (
            !createBrandMedalHtmlPage
        )
            {
                throw new Error('buildCreateBrandPageList must have createBrandMedalHtmlPage');
            }

        if
        (
            !createBrandMedalAmpPage
        )
            {
                throw new Error('buildCreateBrandPageList must have createBrandMedalAmpPage');
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
            !getAllModelListByBrandAndMedalDB
        )
            {
                throw new Error('buildCreateBrandPageList must have getAllModelListByBrandAndMedalDB');
            }

        if
        (
            !getAllMedalByBrandDB
        )
            {
                throw new Error('buildCreateBrandPageList must have getAllMedalByBrandDB');
            }

        if
        (
            !getAllChainByBrandAndMedalDB
        )
            {
                throw new Error('buildCreateBrandPageList must have getAllChainByBrandAndMedalDB');
            }
            

        return async function createBrandMedalPageList
        ()
            {
                const brandList = await getAllBrandDB();

                brandList.forEach(
                    async brand =>
                        {
                            const brandMedalList = await getAllMedalByBrandDB
                            (
                                {
                                    brandId: brand.id
                                }
                            );
                            

                            brandMedalList.forEach(
                                async medal =>
                                    {

                                        const brandMedalChainList = await getAllChainByBrandAndMedalDB(
                                            {
                                                brandId: brand.id,
                                                medalId: medal.id
                                            }
                                        );

                                        const modelList = await getAllModelListByBrandAndMedalDB(
                                            {
                                                brandId:brand.id,
                                                medalId: medal.id
                                            }
                                        );

                                        await createBrandMedalHtmlPage(
                                            {
                                                brand: brand,
                                                brandList: brandList,
                                                modelList: modelList,
                                                medalList: brandMedalList,
                                                medal:medal,
                                                chainList: brandMedalChainList

                                            }
                                        );

                                        await createBrandMedalAmpPage(
                                            {
                                                brand: brand,
                                                brandList: brandList,
                                                modelList: modelList,
                                                medalList: brandMedalList,
                                                medal:medal,
                                                chainList: brandMedalChainList

                                            }
                                        );

                                        
                                    }
                            )

                            
                        }
                );
            }
    }