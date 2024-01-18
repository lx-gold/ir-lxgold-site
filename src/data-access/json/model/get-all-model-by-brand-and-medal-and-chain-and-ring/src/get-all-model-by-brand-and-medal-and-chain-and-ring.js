module.exports = function buildGetAllModelByBrandAndMedalAndChainAndRing
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
                throw new Error('buildGetAllModelByBrandAndMedalAndChainAndRing must have modelList');
            }

        return async function getAllModelByBrandAndMedalAndChainAndRing
        (
            {
                brandId,
                medalId,
                chainId,
                ringId
            }
        )
            {
                if
                (
                    !brandId
                )
                    {
                        throw new Error('getAllModelByBrandAndMedalAndChainAndRing must have brandId');
                    }

                if
                (
                    !medalId
                )
                    {
                        throw new Error('getAllModelByBrandAndMedalAndChainAndRing must have medalId');
                    }

                if
                (
                    !chainId
                )
                    {
                        throw new Error('getAllModelByBrandAndMedalAndChainAndRing must have chainId');
                    }

                if
                (
                    !ringId
                )
                    {
                        throw new Error('getAllModelByBrandAndMedalAndChainAndRing must have ringId');
                    }
                    

                const filteredModelList = modelList.filter(
                    (
                        currentModel
                    ) => 
                        {
                            if
                            (
                                currentModel.brand.id == brandId &&
                                currentModel.medal.id == medalId &&
                                currentModel.chain.id == chainId &&
                                currentModel.ring.id == ringId
                                
                            )
                                {
                                    return currentModel
                                }
                        }
                )

                return filteredModelList;
            }
    }