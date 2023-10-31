module.exports = function buildSelectMedalPanelHtml
(
    {
        medalSelectItemHtmlRender
    }
)
    {
        if
        (
            !medalSelectItemHtmlRender
        )
            {
                throw new Error('buildSelectMedalPanelHtml must have medalSelectItemHtmlRender')
            }
        return async function selectMedalPanelHtml
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
                        throw new Error('selectMedalPanelHtml must have brand')
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('selectMedalPanelHtml must have medalList')
                    }

                    
                let selectMedalItemRenderHtmlResult ='';

                for 
                (
                    let medalIndex in medalList
                )
                    {
                        let currentMedal = medalList[medalIndex];

                        const currentMedalHtmlRender =  await medalSelectItemHtmlRender(
                            {
                                brand: brand,
                                medal: currentMedal,
                                selectedMedal: selectedMedal
                            }
                        );
                        
                        selectMedalItemRenderHtmlResult += currentMedalHtmlRender;
                    }

                return `
                    <ul class="brand-model">
                        ${selectMedalItemRenderHtmlResult}
                    </ul>
                `;
            }
    }