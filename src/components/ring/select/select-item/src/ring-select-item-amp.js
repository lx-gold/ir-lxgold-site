module.exports = function buildRingSelectItemAmp
(
    {
        goToBrandChainRingModelListAmpButton
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
                                    src='/statics/images/ring/${ring.thumbnail_file_name}'
                                />
                            </dd>
                            
                            <dt>
                                عنوان
                            </dt>
                            <dd>
                                ${ring.title_fa} - ${ring.title_en}
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
