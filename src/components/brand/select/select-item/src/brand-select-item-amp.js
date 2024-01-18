module.exports = function buildBrandSelectItemAmp
(
    {
        goToBrandModelListButtonAmp
    }
)
    {
        if
        (
            !goToBrandModelListButtonAmp
        )
            {
                throw new Error('buildBrandSelectItemAmp must have goToBrandModelListButtonAmp');
            }
        return async function brandSelectItemAmp
        (
            {
                brand,
                selectedBrand
            }
        )
            {
                if
                (
                    !brand
                )
                    {
                        throw new Error('brandSelectItemAmp must have brand')
                    }

                const goToBrandModelListButtonAmpContent = await goToBrandModelListButtonAmp(
                    {
                        brand: brand
                    }
                )  

                let liClassProperty = '';

                if
                (
                    selectedBrand &&
                    brand.id == selectedBrand.id
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
                                    width = '100px'
                                    src = 'https://assets.lxgold.ir/images/brand/${brand.logo_file_name}'
                                />
                            </dd>
                            
                            <dt>
                                عنوان
                            </dt>
                            <dd>
                                ${brand.title_fa} - ${brand.title_en}
                            </dd>
                        </dl>

                        <ul>
                            <li>
                                ${goToBrandModelListButtonAmpContent}
                            </li>
                        </ul>
                        
                        
                    </li>
                `
            }
    }
