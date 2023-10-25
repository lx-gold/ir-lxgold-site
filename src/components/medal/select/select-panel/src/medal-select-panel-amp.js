module.exports = function buildSelectMedalPanelAmp
(
    {
        medalSelectItemAmpRender
    }
)
    {
        if
        (
            !medalSelectItemAmpRender
        )
            {
                throw new Error('buildSelectMedalPanelAmp must have medalSelectItemAmpRender')
            }
        return async function selectMedalPanelAmp
        (
            {
                brand,
                medalList,
                selectedMedal
            }
        )
            {
                if
                (
                    !brand
                )
                    {
                        throw new Error('selectMedalPanelAmp must have brand')
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('selectMedalPanelAmp must have medalList')
                    }

                    
                let selectMedalItemRenderAmpResult ='';

                for 
                (
                    let medalIndex in medalList
                )
                    {
                        let currentMedal = medalList[medalIndex];

                        const currentMedalAmpRender =  await medalSelectItemAmpRender(
                            {
                                brand: brand,
                                medal: currentMedal,
                                selectedMedal: selectedMedal
                            }
                        );
                        
                        selectMedalItemRenderAmpResult += currentMedalAmpRender;
                    }

                return `
                    <ul>
                        ${selectMedalItemRenderAmpResult}
                    </ul>
                `;
            }
    }