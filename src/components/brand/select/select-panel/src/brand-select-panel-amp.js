module.exports = function buildSelectBrandPanelAmp
(
    {
        brandSelectItemRenderAmp
    }
)
    {
        if
        (
            !brandSelectItemRenderAmp
        )
            {
                throw new Error('buildSelectBrandPanelAmp must have brandSelectItemRenderAmp')
            }
        return async function selectBrandPanelAmp
        (
            {
                brandList,
                selectedBrand
            }
        )
            {
                if
                (
                    !brandList
                )
                    {
                        throw new Error('selectBrandPanelAmp must have brandList')
                    }

                    
                let selectBrandItemAmpRenderResult ='';

                for 
                (
                    let brandIndex in brandList
                ) {

                    let currentBrand = brandList[brandIndex];

                    const currentBrandAmpRender =  await brandSelectItemRenderAmp(
                        {
                            brand: currentBrand,
                            selectedBrand: selectedBrand
                        }
                    )
                    selectBrandItemAmpRenderResult += currentBrandAmpRender;
                }

                if
                (
                    selectedBrand  
                )
                    {
                        return `
                        <details>
                            <summary>
                                <img
                                    src = '/statics/images/brand/${selectedBrand.logo_file_name}'
                                />
                                
                            </summary>
                            <ul class="brand-select-panel">
                                ${selectBrandItemAmpRenderResult}
                            </ul>
                        </details>
                        `
                    }
                else
                    {
                        return `
                            <ul class="brand-select-panel">
                                ${selectBrandItemAmpRenderResult}
                            </ul>
                        `
                    }
            }
    }