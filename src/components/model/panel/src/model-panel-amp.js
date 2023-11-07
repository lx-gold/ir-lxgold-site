module.exports = function buildModelPanelAmp
(
    {
        selectBrandRenderAmp,
        modelListRenderAmp
    }
)
    {
        if
        (
            !selectBrandRenderAmp
        )
            {
                throw new Error('buildModelPanelAmp must have selectBrandRenderAmp')
            }

        if
        (
            !modelListRenderAmp
        )
            {
                throw new Error('buildModelPanelAmp must have modelListRenderAmp')
            }
        return async function modelPanelAmp
        (
            {
                brandList,
                modelList
            }
        )
            {
                if
                (
                    !brandList
                )
                    {
                        throw new Error('modelPanelAmp must have brandList')
                    }
                if
                (
                    !modelList
                )
                    {
                        throw new Error('modelPanelAmp must have modelList')
                    }

                const selectBrandAmpContent = await selectBrandRenderAmp(
                    {
                        brandList: brandList
                    }
                );

                const modelListAmpContent = await modelListRenderAmp (
                    {
                        modelList: modelList
                    }
                );

                
                const ampContent = `
                    <nav>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </nav>
                    `+ selectBrandAmpContent + modelListAmpContent;

                return ampContent;
                
            }
    }