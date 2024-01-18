module.exports = function buildGetAllModelByBrandAndMedal
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
                throw new Error('buildGetAllModelByBrandAndMedal must have modelList');
            }

        return async function getAllModelByBrandAndMedal
        (
            {
                brandId,
                medalId
            }
        )
            {
                if
                (
                    !brandId
                )
                    {
                        throw new Error('getAllModelByBrandAndChain must have brandId');
                    }

                if
                (
                    !medalId
                )
                    {
                        throw new Error('getAllModelByBrandAndChain must have medalId');
                    }
                    

                const filteredModelList = modelList.filter(
                    (currentModel) => 
                        {
                            if
                            (
                                currentModel.brand.id == brandId &&
                                currentModel.medal.id == medalId 
                            )
                                {
                                    return currentModel
                                }
                        }
                )

                return filteredModelList;
            }
    }