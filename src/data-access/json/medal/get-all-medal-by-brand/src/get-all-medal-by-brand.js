module.exports = function buildGetAllMedalByBrand
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
                throw new Error('buildGetAllMedalByBrand must have getAllModel');
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

                const modelList = await getAllModel();

                let filteredModelList = modelList.filter(
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
                );

                let filteredMedalList = filteredModelList.map(
                    (
                        currentModel
                    )=>
                        {
                            return currentModel.medal
                        }
                )

                return filteredMedalList;
            }
    }