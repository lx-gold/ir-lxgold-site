module.exports = function buildModelBrandMedalChainRingPanelHtml
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
                throw new Error('buildModelBrandMedalChainRingPanelHtml must have selectBrandHtmlRender')
            }

        if
        (
            !selectMedalHtmlRender
        )
            {
                throw new Error('buildModelBrandMedalChainRingPanelHtml must have selectMedalHtmlRender')
            }

        if
        (
            !selectChainHtmlRender
        )
            {
                throw new Error('buildModelBrandMedalChainRingPanelHtml must have selectChainHtmlRender')
            }

        if
        (
            !selectRingHtmlRender
        )
            {
                throw new Error('buildModelBrandMedalChainRingPanelHtml must have selectRingHtmlRender')
            }

        if
        (
            !modelListHtmlRender
        )
            {
                throw new Error('buildModelBrandMedalChainRingPanelHtml must have modelListHtmlRender')
            }
        return async function modelBrandMedalChainRingPanelHtml
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
                        throw new Error('modelBrandMedalChainRingPanelHtml must have brandList')
                    }
                
                if
                (
                    !selectedBrand
                )
                    {
                        throw new Error('modelBrandMedalChainRingPanelHtml must have selectedBrand')
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('modelBrandMedalChainRingPanelHtml must have medalList')
                    }
                
                if
                (
                    !selectedMedal
                )
                    {
                        throw new Error('modelBrandMedalChainRingPanelHtml must have selectedMedal')
                    }

                if
                (
                    !chainList
                )
                {
                    throw new Error('modelBrandMedalChainRingPanelHtml must have chainList')
                }

                if
                (
                    !selectedChain
                )
                    {
                        throw new Error('modelBrandMedalChainRingPanelHtml must have selectedChain')
                    }

                if
                (
                    !ringList
                )
                    {
                        throw new Error('modelBrandMedalChainRingPanelHtml must have ringList')
                    }
                

                if
                (
                    !modelList
                )
                    {
                        throw new Error('modelBrandMedalChainRingPanelHtml must have modelList')
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
                        selectedRing: selectedRing
                    }
                );

                const modelListHtmlContent = await modelListHtmlRender (
                    {
                        modelList: modelList
                    }
                );


                const content = `
                    <nav class="panel-navigation">
                        <ul class="panel-navigation-list">
                            <li class="panel-navigation-list-item">
                                ${selectBrandHtmlContent}
                            </li>
                            <li class="panel-navigation-list-item">
                                ${selectMedalHtmlContent}
                            </li>
                            <li class="panel-navigation-list-item">
                                ${selectChainHtmlContent}
                            </li>
                            <li class="panel-navigation-list-item">
                                ${selectRingHtmlContent}
                            </li>
                        </ul>
                    </nav>
                    `+ modelListHtmlContent;

                return content;

                
            }
    }