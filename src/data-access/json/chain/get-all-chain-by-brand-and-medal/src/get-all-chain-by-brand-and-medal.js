module.exports = function buildGetAllChainByBrandAndMedal
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
                throw new Error('buildGetAllChainByBrandAndMedal must have getAllModel');
            }
        return async function getAllChainByBrandAndMedal
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
                        throw new Error('getAllChainByBrandAndMedal must have brandId');
                    }

                if
                (
                    !medalId
                )
                    {
                        throw new Error('getAllChainByBrandAndMedal must have medalId');
                    }

                const modelList = await getAllModel();

                let filteredModelList = modelList.filter(
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
                );

                let filteredChainList = filteredModelList.map(
                    (
                        currentModel
                    )=>
                        {
                            return currentModel.chain
                        }
                )

                return filteredChainList;
            }
    }