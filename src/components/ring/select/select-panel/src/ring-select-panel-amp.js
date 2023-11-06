module.exports = function buildSelectRingPanelAmp
(
    {
        ringSelectItemAmpRender
    }
)
    {
        if
        (
            !ringSelectItemAmpRender
        )
            {
                throw new Error('buildSelectRingPanelAmp must have ringSelectItemAmpRender')
            }
        return async function selectRingPanelAmp
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
                        throw new Error('selectRingPanelAmp must have brand')
                    }
                
                if
                (
                    !medal
                )
                    {
                        throw new Error('selectRingPanelAmp must have medal')
                    }
                
                if
                (
                    !chain
                )
                    {
                        throw new Error('selectRingPanelAmp must have chain')
                    }
    

                if
                (
                    !ringList
                )
                    {
                        throw new Error('selectRingPanelAmp must have ringList')
                    }

                    
                let selectRingItemAmpRenderResult ='';

                for 
                (
                    let ringIndex in ringList
                )
                    {
                        let currentRing = ringList[ringIndex];

                        const currentRingAmpRender =  await ringSelectItemAmpRender(
                            {
                                brand: brand,
                                medal: medal,
                                chain: chain,
                                ring: currentRing,
                                selectedRing: selectedRing
                            }
                        );
                        
                        selectRingItemAmpRenderResult += currentRingAmpRender;
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
                                ${selectRingItemAmpRenderResult}
                            </ul>
                        </details>
                        `
                    }
                else
                    {
                        return `
                            <ul class="brand-model">
                                ${selectRingItemAmpRenderResult}
                            </ul>
                        `
                    }

            }
    }