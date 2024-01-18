module.exports = function buildSelectChainPanelHtml
(
    {
        chainSelectItemRenderHtml
    }
)
    {
        if
        (
            !chainSelectItemRenderHtml
        )
            {
                throw new Error('buildSelectChainPanelHtml must have chainSelectItemRenderHtml')
            }
        return async function selectChainPanelHtml
        (
            {
                brand,
                medal,
                chainList,
                selectedChain
            }
        )
            {
                if
                (
                    !brand
                )
                    {
                        throw new Error('selectChainPanelHtml must have brand')
                    }
                
                if
                (
                    !medal
                )
                    {
                        throw new Error('selectChainPanelHtml must have medal')
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('selectChainPanelHtml must have chainList')
                    }

                    
                let selectChainItemRenderHtmlResult ='';

                for 
                (
                    let currentChain of chainList
                )
                    {

                        const currentChainHtmlRender =  await chainSelectItemRenderHtml(
                            {
                                brand: brand,
                                medal: medal,
                                chain: currentChain,
                                selectedChain: selectedChain
                            }
                        );
                        
                        selectChainItemRenderHtmlResult += currentChainHtmlRender;
                    }

                if
                (
                    selectedChain  
                )
                    {
                        return `
                        <details>
                            <summary>
                                <img
                                    src='https://assets.lxgold.ir/images/chain/${selectedChain.thumbnail_file_name}'
                                />
                                
                            </summary>
                            <ul class="brand-model">
                                ${selectChainItemRenderHtmlResult}
                            </ul>
                        </details>
                        `
                    }
                else
                    {
                        return `
                            <ul class="brand-model">
                                ${selectChainItemRenderHtmlResult}
                            </ul>
                        `
                    }
            }
    }