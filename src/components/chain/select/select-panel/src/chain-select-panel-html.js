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
                    let chainIndex in chainList
                )
                    {
                        let currentChain = chainList[chainIndex];

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

                return `
                    <ul class="brand-medal-chain-model-list">
                        ${selectChainItemRenderHtmlResult}
                    </ul>
                `;
            }
    }