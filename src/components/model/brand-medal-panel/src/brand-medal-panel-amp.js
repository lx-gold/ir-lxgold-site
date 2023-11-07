module.exports = function buildModelBrandMedalPanelAmp
(
    {
        selectBrandAmpRender,
        selectMedalAmpRender,
        selectChainAmpRender,
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
            !selectChainAmpRender
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
        return async function modelBrandMedalPanelAmp
        (
            {
                brandList,
                selectedBrand,
                medalList,
                selectedMedal,
                chainList,
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
                    !selectedMedal
                )
                    {
                        throw new Error('modelPanelAmp must have selectedMedal')
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('modelPanelAmp must have chainList')
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

                const selectMedalAmpContent = await selectMedalAmpRender(
                    {
                        brand: selectedBrand,
                        medalList: medalList,
                        selectedMedal:selectedMedal
                    }
                );

                const selectChainAmpContent = await selectChainAmpRender(
                    {
                        brand: selectedBrand,
                        medal: selectedMedal,
                        chainList: chainList
                    }
                );

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
                        <li>
                            ${selectMedalAmpContent}
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
                `+ selectChainAmpContent + modelListAmpContent;

                return content;

                
            }
    }