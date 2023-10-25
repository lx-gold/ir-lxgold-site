module.exports = function buildGetAllModelByBrandAndMedalAndChain
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
                throw new Error('buildGetAllModelByBrandAndMedalAndChain must have getAllModel');
            }

        return async function getAllModelByBrandAndMedalAndChain
        (
            {
                brandId,
                medalId,
                chainId
            }
        )
            {
                if
                (
                    !brandId
                )
                    {
                        throw new Error('getAllModelByBrandAndMedalAndChain must have brandId');
                    }

                if
                (
                    !medalId
                )
                    {
                        throw new Error('getAllModelByBrandAndMedalAndChain must have medalId');
                    }

                if
                (
                    !chainId
                )
                    {
                        throw new Error('getAllModelByBrandAndMedalAndChain must have chainId');
                    }
                    
                const modelList = await getAllModel();

                const filteredModelList = modelList.filter(
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
                )

                return filteredModelList;
            }
    }