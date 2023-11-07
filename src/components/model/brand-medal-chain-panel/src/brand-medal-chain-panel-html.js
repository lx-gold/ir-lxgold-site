module.exports = function buildModelBrandMedalChainPanelHtml
(
    {
        selectBrandHtmlRender,
        selectMedalHtmlRender,
        selectChainHtmlRender,
        selectRingHtmlRender,
        modelListHtmlRender
    }
)
    {
        if
        (
            !selectBrandHtmlRender
        )
            {
                throw new Error('buildModelBrandMedalChainPanelHtml must have selectBrandHtmlRender')
            }

        if
        (
            !selectMedalHtmlRender
        )
            {
                throw new Error('buildModelBrandMedalChainPanelHtml must have selectMedalHtmlRender')
            }

        if
        (
            !selectChainHtmlRender
        )
            {
                throw new Error('buildModelBrandMedalChainPanelHtml must have selectChainHtmlRender')
            }

        if
        (
            !selectRingHtmlRender
        )
            {
                throw new Error('buildModelBrandMedalChainPanelHtml must have selectRingHtmlRender')
            }
        if
        (
            !modelListHtmlRender
        )
            {
                throw new Error('buildModelBrandMedalChainPanelHtml must have modelListHtmlRender')
            }
            
        return async function modelBrandMedalChainPanelHtml
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
                        throw new Error('modelBrandMedalChainPanelHtml must have brandList')
                    }
                
                if
                (
                    !selectedBrand
                )
                    {
                        throw new Error('modelBrandMedalChainPanelHtml must have selectedBrand')
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('modelBrandMedalChainPanelHtml must have medalList')
                    }
                
                if
                (
                    !selectedMedal
                )
                    {
                        throw new Error('modelBrandMedalChainPanelHtml must have selectedMedal')
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('modelBrandMedalChainPanelHtml must have chainList')
                    }
                
                    

                if
                (
                    !ringList
                )
                    {
                        throw new Error('modelBrandMedalChainPanelHtml must have ringList')
                    }

                if
                (
                    !modelList
                )
                    {
                        throw new Error('modelBrandMedalChainPanelHtml must have modelList')
                    }

                const selectBrandHtmlContent = await selectBrandHtmlRender(
                    {
                        brandList: brandList,
                        selectedBrand:selectedBrand
                    }
                );

                const selectMedalHtmlContent = await selectMedalHtmlRender(
                    {
                        brand: selectedBrand,
                        medalList: medalList,
                        selectedMedal:selectedMedal
                    }
                );

                const selectChainHtmlContent = await selectChainHtmlRender(
                    {
                        brand: selectedBrand,
                        medal: selectedMedal,
                        chainList: chainList,
                        selectedChain: selectedChain
                    }
                );

                const selectRingHtmlContent = await selectRingHtmlRender(
                    {
                        brand: selectedBrand,
                        medal: selectedMedal,
                        chain: selectedChain,
                        ringList: ringList,
                    }
                );

                const modelListHtmlContent = await modelListHtmlRender (
                    {
                        modelList: modelList
                    }
                );

                
                const content = `
                    <nav>
                        <ul>
                            <li>
                                ${selectBrandHtmlContent}
                            </li>
                            <li>
                                ${selectMedalHtmlContent}
                            </li>
                            <li>
                                ${selectChainHtmlContent}
                            </li>
                            <li></li>
                        </ul>
                    </nav>
                    `+ selectRingHtmlContent + modelListHtmlContent;

                return content;

                
            }
    }