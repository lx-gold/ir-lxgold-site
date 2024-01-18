module.exports = function buildGetAllRingByBrandAndMedalAndChain
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
                throw new Error('buildGetAllRingByBrandAndMedalAndChain must have modelList');
            }
        return async function getAllRingByBrandAndMedalAndChain
        (
            {
                brandId,
                medalId,
                chainId,
            }
        )
            {
                if
                (
                    !brandId
                )
                    {
                        throw new Error('getAllRingByBrandAndMedalAndChain must have brandId');
                    }

                if
                (
                    !medalId
                )
                    {
                        throw new Error('getAllRingByBrandAndMedalAndChain must have medalId');
                    }

                if
                (
                    !chainId
                )
                    {
                        throw new Error('getAllRingByBrandAndMedalAndChain must have chainId');
                    }


                let filteredModelList = modelList.filter(
                    (currentModel) => 
                        {
                            if
                            (
                                currentModel.brand.id == brandId &&
                                currentModel.medal.id == medalId &&
                                currentModel.chain.id == chainId 
                            )
                                {
                                    return currentModel
                                }
                        }
                );

                let filteredRingList = filteredModelList.map(
                    (
                        currentModel
                    )=>
                        {
                            return currentModel.ring
                        }
                );

                const uniqFilteredRingList = new Set(filteredRingList);

                return uniqFilteredRingList;

            }
    }