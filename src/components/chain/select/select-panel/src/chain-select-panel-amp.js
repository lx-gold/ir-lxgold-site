module.exports = function buildSelectChainPanelAmp
(
    {
        chainSelectItemRenderAmp
    }
)
    {
        if
        (
            !chainSelectItemRenderAmp
        )
            {
                throw new Error('buildSelectChainPanelAmp must have chainSelectItemRenderAmp')
            }
        return async function selectChainPanelAmp
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
                        throw new Error('selectChainPanelAmp must have brand')
                    }
                
                if
                (
                    !medal
                )
                    {
                        throw new Error('selectChainPanelAmp must have medal')
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('selectChainPanelAmp must have chainList')
                    }

                    
                let selectChainItemRenderAmpResult ='';

                for 
                (
                    let currentChain of chainList
                )
                    {
                        const currentChainAmpRender =  await chainSelectItemRenderAmp(
                            {
                                brand: brand,
                                medal: medal,
                                chain: currentChain,
                                selectedChain: selectedChain
                            }
                        );
                        
                        selectChainItemRenderAmpResult += currentChainAmpRender;
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
                                ${selectChainItemRenderAmpResult}
                            </ul>
                        </details>
                        `
                    }
                else
                    {
                        return `
                            <ul class="brand-model">
                                ${selectChainItemRenderAmpResult}
                            </ul>
                        `
                    }

            }
    }