module.exports = function buildRingSelectItemAmp
(
    {
        goToBrandChainRingModelListAmpButton,
        weightLabel
    }
)
    {
        if
        (
            !goToBrandChainRingModelListAmpButton
        )
            {
                throw new Error('buildRingSelectItemAmp must have goToBrandChainRingModelListAmpButton');
            }

        if
        (
            !weightLabel
        )
            {
                throw new Error('buildRingSelectItemAmp must have weightLabel');
            }
        return async function ringSelectItemAmp
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
                        throw new Error('ringSelectItemAmp must have brand')
                    }

                if
                (
                    !medal
                )
                    {
                        throw new Error('ringSelectItemAmp must have medal')
                    }

                if
                (
                    !chain
                )
                    {
                        throw new Error('ringSelectItemAmp must have chain')
                    }
                
                if
                (
                    !ring
                )
                    {
                        throw new Error('ringSelectItemAmp must have ring')
                    }

                const goToBrandChainRingModelListAmpButtonContent = await goToBrandChainRingModelListAmpButton(
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
                                ${goToBrandChainRingModelListAmpButtonContent}
                            </li>
                        </ul>
                    </li>
                `
            }
    }
