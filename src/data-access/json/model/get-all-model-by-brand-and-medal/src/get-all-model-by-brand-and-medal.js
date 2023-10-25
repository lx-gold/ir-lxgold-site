module.exports = function buildGetAllModelByBrandAndMedal
(
    {
        getAllModel
    }
)
    {
        if
        (
            !getAllModel
        )
            {
                throw new Error('buildGetAllModelByBrandAndMedal must have getAllModel');
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
                    
                const modelList = await getAllModel();

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