module.exports = function buildGetAllModelByBrand
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
                throw new Error('buildGetAllModel must have modelList');
            }

        return async function getAllModelByBrand
        (
            {
                brandId
            }
        )
            {
                if
                (
                    !brandId
                )
                    {
                        throw new Error('getAllModelByBrand must have brandId');
                    }
                    
                const filteredModelList = modelList.filter(
                    (currentModel) => 
                        {
                            if
                            (
                                currentModel.brand.id == brandId
                            )
                                {
                                    return currentModel
                                }
                        }
                )

                return filteredModelList;
            }
    }