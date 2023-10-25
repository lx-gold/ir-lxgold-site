module.exports = function buildModelBrandMedalChainPanelAmp
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
                throw new Error('buildModelBrandMedalChainPanelAmp must have selectBrandAmpRender')
            }

        if
        (
            !selectMedalAmpRender
        )
            {
                throw new Error('buildModelBrandMedalChainPanelAmp must have selectMedalAmpRender')
            }

        if
        (
            !selectChainAmpRender
        )
            {
                throw new Error('buildModelBrandMedalChainPanelAmp must have selectChainAmpRender')
            }

        if
        (
            !selectRingAmpRender
        )
            {
                throw new Error('buildModelBrandMedalChainPanelAmp must have selectRingAmpRender')
            }
        if
        (
            !modelListAmpRender
        )
            {
                throw new Error('buildModelBrandMedalChainPanelAmp must have modelListAmpRender')
            }
            
        return async function modelBrandMedalChainPanelAmp
        (
            {
                brandList,
                selectedBrand,
                medalList,
                selectedMedal,
                chainList,
                selectedChain,
                ringList,
                modelList
            }
        )
            {
                if
                (
                    !brandList
                )
                    {
                        throw new Error('modelBrandMedalChainPanelAmp must have brandList')
                    }
                
                if
                (
                    !selectedBrand
                )
                    {
                        throw new Error('modelBrandMedalChainPanelAmp must have selectedBrand')
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('modelBrandMedalChainPanelAmp must have medalList')
                    }
                
                if
                (
                    !selectedMedal
                )
                    {
                        throw new Error('modelBrandMedalChainPanelAmp must have selectedMedal')
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('modelBrandMedalChainPanelAmp must have chainList')
                    }
                
                    

                if
                (
                    !ringList
                )
                    {
                        throw new Error('modelBrandMedalChainPanelAmp must have ringList')
                    }

                if
                (
                    !modelList
                )
                    {
                        throw new Error('modelBrandMedalChainPanelAmp must have modelList')
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
                        ringList: ringList
                    }
                );

                const modelListAmpContent = await modelListAmpRender (
                    {
                        modelList: modelList
                    }
                );


                const content = selectBrandAmpContent + selectMedalAmpContent+ selectChainAmpContent + selectRingAmpContent + modelListAmpContent;

                return content;

                
            }
    }