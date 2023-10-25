module.exports = function buildCreateModelPageList
(
    {
        createModelAmpPage,
        createModelPage,
        getAllModelDB
    }
)
    {
        if
        (
            !createModelPage
        )
            {
                throw new Error('buildCreateModelPageList must have createModelPage');
            }

        if
        (
            !createModelAmpPage
        )
            {
                throw new Error('buildCreateModelPageList must have createModelAmpPage');
            }

        if
        (
            !getAllModelDB
        )
            {
                throw new Error('buildCreateModelPageList must have getAllModelDB');
            }


        return async function createModelPageList
        ()
            {
                const modelList = await getAllModelDB();

                modelList.forEach(
                    async model =>
                        {

                            await createModelPage(
                                {
                                    model: model
                                }
                            );

                            await createModelAmpPage(
                                {
                                    model: model
                                }
                            )
                        }
                );
            }
    }