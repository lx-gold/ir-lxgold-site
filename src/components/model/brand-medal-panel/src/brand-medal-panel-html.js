module.exports = function buildModelBrandMedalPanelHtml
(
    {
        selectBrandHtmlRender,
        selectMedalHtmlRender,
        selectChainHtmlRender,
        modelListHtmlRender
    }
)
    {
        if
        (
            !selectBrandHtmlRender
        )
            {
                throw new Error('buildModelPanelHtml must have selectBrandHtmlRender')
            }

        if
        (
            !selectMedalHtmlRender
        )
            {
                throw new Error('buildModelPanelHtml must have selectMedalHtmlRender')
            }

        if
        (
            !selectChainHtmlRender
        )
            {
                throw new Error('buildModelPanelHtml must have selectMedalHtmlRender')
            }
        if
        (
            !modelListHtmlRender
        )
            {
                throw new Error('buildModelPanelHtml must have modelListHtmlRender')
            }
        return async function modelBrandMedalPanelHtml
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
                        throw new Error('modelPanelHtml must have brandList')
                    }

                if
                (
                    !selectedBrand
                )
                    {
                        throw new Error('modelPanelHtml must have selectedBrand')
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('modelPanelHtml must have medalList')
                    }

                if
                (
                    !selectedMedal
                )
                    {
                        throw new Error('modelPanelHtml must have selectedMedal')
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('modelPanelHtml must have chainList')
                    }

                if
                (
                    !modelList
                )
                    {
                        throw new Error('modelPanelHtml must have modelList')
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
                        chainList: chainList
                    }
                );

                const modelListHtmlContent = await modelListHtmlRender (
                    {
                        modelList: modelList
                    }
                );

                
                const content = selectBrandHtmlContent + selectMedalHtmlContent + selectChainHtmlContent+ modelListHtmlContent;

                return content;

                
            }
    }