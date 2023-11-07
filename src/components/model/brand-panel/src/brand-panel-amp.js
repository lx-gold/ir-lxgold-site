module.exports = function buildModelBrandPanelAmp
(
    {
        selectBrandAmpRender,
        selectMedalAmpRender,
        modelListAmpRender
    }
)
    {
        if
        (
            !selectBrandAmpRender
        )
            {
                throw new Error('buildModelPanelAmp must have selectBrandAmpRender')
            }

        if
        (
            !selectMedalAmpRender
        )
            {
                throw new Error('buildModelPanelAmp must have selectMedalAmpRender')
            }
        if
        (
            !modelListAmpRender
        )
            {
                throw new Error('buildModelPanelAmp must have modelListAmpRender')
            }
        return async function modelBrandPanelAmp
        (
            {
                brandList,
                selectedBrand,
                medalList,
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
                    !selectedBrand
                )
                    {
                        throw new Error('modelPanelAmp must have selectedBrand')
                    }
                
                if
                (
                    !medalList
                )
                    {
                        throw new Error('modelPanelAmp must have medalList')
                    }
                if
                (
                    !modelList
                )
                    {
                        throw new Error('modelPanelAmp must have modelList')
                    }

                const selectBrandAmpContent = await selectBrandAmpRender(
                    {
                        brandList: brandList,
                        selectedBrand:selectedBrand
                    }
                );

                const selectMedalAmpConetent  = await selectMedalAmpRender(
                    {
                        medalList: medalList,
                        brand : selectedBrand,
                    }
                )

                const modelListAmpContent = await modelListAmpRender (
                    {
                        modelList: modelList
                    }
                );

                
                const content = `
                    <nav>
                        <ul>
                            <li>
                                ${selectBrandAmpContent}
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </nav>
                    `+ selectMedalAmpConetent + modelListAmpContent;

                return content;
                
            }
    }