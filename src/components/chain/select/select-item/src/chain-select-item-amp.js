module.exports = function buildChainSelectItemAmp
(
    {
        goToBrandChainModelListButtonAmp
    }
)
    {
        if
        (
            !goToBrandChainModelListButtonAmp
        )
            {
                throw new Error('buildChainSelectItemAmp must have goToBrandChainModelListButtonAmp');
            }
        return async function chainSelectItemAmp
        (
            {
                brand,
                medal,
                chain,
                selectedChain
            }
        )
            {
                if
                (
                    !brand
                )
                    {
                        throw new Error('chainSelectItemAmp must have brand')
                    }

                if
                (
                    !medal
                )
                    {
                        throw new Error('chainSelectItemAmp must have medal')
                    }

                if
                (
                    !chain
                )
                    {
                        throw new Error('chainSelectItemAmp must have chain')
                    }

                const goToBrandChainModelListButtonAmpContent = await goToBrandChainModelListButtonAmp(
                    {
                        brand: brand,
                        medal:medal,
                        chain: chain
                    }
                ) 

                let liClassProperty = '';

                if
                (
                    selectedChain &&
                    chain.id == selectedChain.id
                )
                    {
                        liClassProperty = `class='s'`;
                    }

                return `
                    <li
                        ${liClassProperty}
                    >
                        <dl>
                            <dt>
                                لوگو
                            </dt>
                            <dd>
                                <img
                                    width='100px'
                                    src='/statics/images/chain/${chain.thumbnail_file_name}'
                                />
                            </dd>
                            
                            <dt>
                                عنوان
                            </dt>
                            <dd>
                                ${chain.title_fa} - ${chain.title_en}
                            </dd>
                        </dl>

                        <ul>
                            <li>
                                ${goToBrandChainModelListButtonAmpContent}
                            </li>
                        </ul>

                    </li>
                `

                
            }
    }
