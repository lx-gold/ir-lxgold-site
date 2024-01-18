module.exports = function buildGetAllChainByBrandAndMedal
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
                throw new Error('buildGetAllChainByBrandAndMedal must have modelList');
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

                const uniqFilteredChainList = new Set(filteredChainList);

                return uniqFilteredChainList;

            }
    }