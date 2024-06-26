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
                    let currentMedal of medalList
                )
                    {
                        const currentMedalHtmlRender =  await medalSelectItemHtmlRender(
                            {
                                brand: brand,
                                medal: currentMedal,
                                selectedMedal: selectedMedal
                            }
                        );
                        
                        selectMedalItemRenderHtmlResult += currentMedalHtmlRender;
                    }

                if
                (
                    selectedMedal  
                )
                    {
                        return `
                        <details>
                            <summary>
                                <img
                                    src = 'https://assets.lxgold.ir/images/medal/${selectedMedal.thumbnail_file_name}'
                                />
                                
                            </summary>
                            <ul class="brand-model">
                                ${selectMedalItemRenderHtmlResult}
                            </ul>
                        </details>
                        `
                    }
                else
                    {
                        return `
                            <ul class="brand-model">
                                ${selectMedalItemRenderHtmlResult}
                            </ul>
                        `
                    }

            }
    }