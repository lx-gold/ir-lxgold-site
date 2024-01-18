module.exports = function buildBrandSelectItemHtml
(
    {
        goToBrandModelListButtonHtml
    }
)
    {
        if
        (
            !goToBrandModelListButtonHtml
        )
            {
                throw new Error('buildBrandSelectItemHtml must have goToBrandModelListButtonHtml');
            }
        return async function brandSelectItemHtml
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
                        throw new Error('brandSelectItemHtml must have brand')
                    }

                const goToBrandModelListButtonHtmlContent = await goToBrandModelListButtonHtml(
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
                                    src = 'https://assets.lxgold.ir/images/brand/${brand.logo_file_name}'
                                />
                            </dd>
                            
                            <dt>
                               عنوان فارسی
                            </dt>
                            <dd>
                                ${brand.title_fa}
                            </dd>
                            <dt>
                            عنوان انگلیسی
                            </dt>
                            <dd>
                               ${brand.title_en}
                            </dd>
                        </dl>

                        <ul>
                            <li>
                                ${goToBrandModelListButtonHtmlContent}
                            </li>
                        </ul>
                        
                        
                    </li>
                `
            }
    }
