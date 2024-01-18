module.exports = function buildRingSelectItemHtml
(
    {
        goToBrandChainRingModelListHtmlButton,
        weightLabel
    }
)
    {
        if
        (
            !goToBrandChainRingModelListHtmlButton
        )
            {
                throw new Error('buildRingSelectItemHtml must have goToBrandChainRingModelListHtmlButton');
            }

        if
        (
            !weightLabel
        )
            {
                throw new Error('buildRingSelectItemHtml must have weightLabel');
            }

        return async function ringSelectItemHtml
        (
            {
                brand,
                medal,
                chain,
                ring,
                selectedRing
            }
        )
            {
                if
                (
                    !brand
                )
                    {
                        throw new Error('ringSelectItemHtml must have brand')
                    }

                if
                (
                    !medal
                )
                    {
                        throw new Error('ringSelectItemHtml must have medal')
                    }

                if
                (
                    !chain
                )
                    {
                        throw new Error('ringSelectItemHtml must have chain')
                    }
                
                if
                (
                    !ring
                )
                    {
                        throw new Error('ringSelectItemHtml must have ring')
                    }

                const goToBrandChainRingModelListHtmlButtonContent = await goToBrandChainRingModelListHtmlButton(
                    {
                        brand: brand,
                        medal:medal,
                        chain: chain,
                        ring: ring
                    }
                )

                let liClassProperty = '';

                if
                (
                    selectedRing &&
                    ring.id == selectedRing.id
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
                                    src='https://assets.lxgold.ir/images/ring/${ring.thumbnail_file_name}'
                                />
                            </dd>
                            
                            <dt>
                                عنوان فارسی
                            </dt>
                            <dd>
                                ${ring.title_fa}
                            </dd>
                            
                            <dt>
                                عنوان انگلیسی
                            </dt>
                            <dd>
                                ${ring.title_en}
                            </dd>

                            <dt>
                                وزن
                            </dt>
                            <dd>
                                ${weightLabel({weight:ring.weight})}
                            </dd>
                        </dl>

                        <ul>
                            <li>
                                ${goToBrandChainRingModelListHtmlButtonContent}
                            </li>
                        </ul>
                    </li>
                `
            }
    }
