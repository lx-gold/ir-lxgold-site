module.exports = function buildSelectRingPanelHtml
(
    {
        ringSelectItemHtmlRender
    }
)
    {
        if
        (
            !ringSelectItemHtmlRender
        )
            {
                throw new Error('buildSelectRingPanelHtml must have ringSelectItemHtmlRender')
            }
        return async function selectRingPanelHtml
        (
            {
                brand,
                medal,
                chain,
                ringList,
                selectedRing
            }
        )
            {
                if
                (
                    !brand
                )
                    {
                        throw new Error('selectRingPanelHtml must have brand')
                    }
                
                if
                (
                    !medal
                )
                    {
                        throw new Error('selectRingPanelHtml must have medal')
                    }
                
                if
                (
                    !chain
                )
                    {
                        throw new Error('selectRingPanelHtml must have chain')
                    }
    

                if
                (
                    !ringList
                )
                    {
                        throw new Error('selectRingPanelHtml must have ringList')
                    }

                    
                let selectRingItemHtmlRenderResult ='';

                for 
                (
                    let ringIndex in ringList
                )
                    {
                        let currentRing = ringList[ringIndex];

                        const currentRingHtmlRender =  await ringSelectItemHtmlRender(
                            {
                                brand: brand,
                                medal: medal,
                                chain: chain,
                                ring: currentRing,
                                selectedRing: selectedRing
                            }
                        );
                        
                        selectRingItemHtmlRenderResult += currentRingHtmlRender;
                    }

                    if
                    (
                        selectedRing  
                    )
                        {
                            return `
                            <details>
                                <summary>
                                    <img
                                        src='/statics/images/ring/${selectedRing.thumbnail_file_name}'
                                    />
                                    
                                </summary>
                                <ul class="brand-model">
                                    ${selectRingItemHtmlRenderResult}
                                </ul>
                            </details>
                            `
                        }
                    else
                        {
                            return `
                                <ul class="brand-model">
                                    ${selectRingItemHtmlRenderResult}
                                </ul>
                            `
                        }
            }
    }