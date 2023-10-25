module.exports = function buildGetAllRingByBrandAndMedalAndChain
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
                throw new Error('buildGetAllRingByBrandAndMedalAndChain must have getAllModel');
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

                const modelList = await getAllModel();

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
                )

                return filteredRingList;
            }
    }