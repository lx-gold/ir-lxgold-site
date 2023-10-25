module.exports = function buildModelBrandMedalChainRingPanelAmp
(
    {
        selectBrandAmpRender,
        selectMedalAmpRender,
        selectChainAmpRender,
        selectRingAmpRender,
        modelListAmpRender
    }
)
    {
        if
        (
            !selectBrandAmpRender
        )
            {
                throw new Error('buildModelBrandMedalChainRingPanelAmp must have selectBrandAmpRender')
            }

        if
        (
            !selectMedalAmpRender
        )
            {
                throw new Error('buildModelBrandMedalChainRingPanelAmp must have selectMedalAmpRender')
            }

        if
        (
            !selectChainAmpRender
        )
            {
                throw new Error('buildModelBrandMedalChainRingPanelAmp must have selectChainAmpRender')
            }

        if
        (
            !selectRingAmpRender
        )
            {
                throw new Error('buildModelBrandMedalChainRingPanelAmp must have selectRingAmpRender')
            }

        if
        (
            !modelListAmpRender
        )
            {
                throw new Error('buildModelBrandMedalChainRingPanelAmp must have modelListAmpRender')
            }
        return async function modelBrandMedalChainRingPanelAmp
        (
            {
                brandList,
                selectedBrand,
                medalList,
                selectedMedal,
                chainList,
                selectedChain,
                ringList,
                selectedRing,
                modelList
            }
        )
            {
                if
                (
                    !brandList
                )
                    {
                        throw new Error('modelBrandMedalChainRingPanelAmp must have brandList')
                    }
                
                if
                (
                    !selectedBrand
                )
                    {
                        throw new Error('modelBrandMedalChainRingPanelAmp must have selectedBrand')
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('modelBrandMedalChainRingPanelAmp must have medalList')
                    }
                
                if
                (
                    !selectedMedal
                )
                    {
                        throw new Error('modelBrandMedalChainRingPanelAmp must have selectedMedal')
                    }

                if
                (
                    !chainList
                )
                {
                    throw new Error('modelBrandMedalChainRingPanelAmp must have chainList')
                }

                if
                (
                    !selectedChain
                )
                    {
                        throw new Error('modelBrandMedalChainRingPanelAmp must have selectedChain')
                    }

                if
                (
                    !ringList
                )
                    {
                        throw new Error('modelBrandMedalChainRingPanelAmp must have ringList')
                    }
                

                if
                (
                    !modelList
                )
                    {
                        throw new Error('modelBrandMedalChainRingPanelAmp must have modelList')
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
                        chainList: chainList,
                        selectedChain: selectedChain
                    }
                );

                const selectRingAmpContent = await selectRingAmpRender(
                    {
                        brand: selectedBrand,
                        medal: selectedMedal,
                        chain: selectedChain,
                        ringList: ringList,
                        selectedRing: selectedRing
                    }
                );

                const modelListAmpContent = await modelListAmpRender (
                    {
                        modelList: modelList
                    }
                );


                const content = selectBrandAmpContent + selectMedalAmpContent + selectChainAmpContent + selectRingAmpContent + modelListAmpContent;

                return content;

                
            }
    }