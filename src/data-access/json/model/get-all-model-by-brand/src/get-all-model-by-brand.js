module.exports = function buildGetAllModelByBrand
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
                throw new Error('buildGetAllModel must have getAllModel');
            }

        return async function getAllModelByBrand
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
                        throw new Error('getAllModelByBrand must have brandId');
                    }
                    
                const modelList = await getAllModel();

                const filteredModelList = modelList.filter(
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
                )

                return filteredModelList;
            }
    }