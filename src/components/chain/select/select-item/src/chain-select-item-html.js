module.exports = function buildChainSelectItemHtml
(
    {
        goToBrandChainModelListButtonHtml
    }
)
    {
        if
        (
            !goToBrandChainModelListButtonHtml
        )
            {
                throw new Error('buildChainSelectItemHtml must have goToBrandChainModelListButtonHtml');
            }
        return async function chainSelectItemHtml
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
                        throw new Error('chainSelectItemHtml must have brand')
                    }

                if
                (
                    !medal
                )
                    {
                        throw new Error('chainSelectItemHtml must have medal')
                    }

                if
                (
                    !chain
                )
                    {
                        throw new Error('chainSelectItemHtml must have chain')
                    }

                const goToBrandChainModelListButtonHtmlContent = await goToBrandChainModelListButtonHtml(
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
                                ${goToBrandChainModelListButtonHtmlContent}
                            </li>
                        </ul>

                    </li>
                `

                
            }
    }
