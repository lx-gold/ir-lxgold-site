module.exports = function buildSelectBrandPanelHtml
(
    {
        brandSelectItemRenderHtml
    }
)
    {
        if
        (
            !brandSelectItemRenderHtml
        )
            {
                throw new Error('buildSelectBrandPanelHtml must have brandSelectItemRenderHtml')
            }
        return async function selectBrandPanelHtml
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
                        throw new Error('selectBrandPanelHtml must have brandList')
                    }

                    
                let selectBrandItemHtmlRenderResult ='';

                for 
                (
                    let brandIndex in brandList
                ) {

                    let currentBrand = brandList[brandIndex];

                    const currentBrandHtmlRender =  await brandSelectItemRenderHtml(
                        {
                            brand: currentBrand,
                            selectedBrand: selectedBrand
                        }
                    )
                    selectBrandItemHtmlRenderResult += currentBrandHtmlRender;
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
                                    src = 'https://assets.lxgold.ir/images/brand/${selectedBrand.logo_file_name}'
                                />
                                
                            </summary>
                            <ul class="brand-select-panel">
                                ${selectBrandItemHtmlRenderResult}
                            </ul>
                        </details>
                        `
                    }
                else
                    {
                        return `
                            <ul class="brand-select-panel">
                                ${selectBrandItemHtmlRenderResult}
                            </ul>
                        `
                    }
                
            }
    }