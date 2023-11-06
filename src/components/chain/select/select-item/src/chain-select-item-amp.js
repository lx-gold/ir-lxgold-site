module.exports = function buildChainSelectItemAmp
(
    {
        goToBrandChainModelListButtonAmp,
        weightLabel
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

        if
        (
            !weightLabel
        )
            {
                throw new Error('buildChainSelectItemAmp must have weightLabel');
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
                                عنوان فارسی
                            </dt>
                            <dd>
                                ${chain.title_fa}
                            </dd>
                            
                            <dt>
                                عنوان انگلیسی
                            </dt>
                            <dd>
                                ${chain.title_en}
                            </dd>

                            <dt>
                                وزن
                            </dt>
                            <dd>
                                ${weightLabel({weight:chain.weight})}
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
