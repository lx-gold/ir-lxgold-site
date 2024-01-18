module.exports = function buildGetAllMedalByBrand
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
                throw new Error('buildGetAllMedalByBrand must have modelList');
            }

        return async function getAllMedalByBrand
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
                        throw new Error('getAllMedalByBrand must have brandId');
                    }

                let filteredModelList = modelList.filter(
                    (
                        currentModel
                    ) => 
                        {
                            if
                            (
                                currentModel.brand.id == brandId
                            )
                                {
                                    return currentModel
                                }
                        }
                );

                let filteredMedalList = filteredModelList.map(
                    (
                        currentModel
                    ) =>
                        {
                            return currentModel.medal
                        }
                )

                const uniqFilteredMedalList = new Set(filteredMedalList);

                return uniqFilteredMedalList;

            }
    }