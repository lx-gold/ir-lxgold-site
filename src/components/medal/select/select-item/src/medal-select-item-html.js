module.exports = function buildMedalSelectItemHtml
(
    {
        goToBrandMedalModelListButtonHtml,
        weightLabel
    }
)
    {
        if
        (
            !goToBrandMedalModelListButtonHtml
        )
            {
                throw new Error('buildMedalSelectItemHtml must have goToBrandMedalModelListButtonHtml');
            }
        return async function medalSelectItemHtml
        (
            {
                brand,
                medal,
                selectedMedal
            }
        )
            {
                if
                (
                    !brand
                )
                    {
                        throw new Error('medalSelectItemHtml must have brand')
                    }

                if
                (
                    !medal
                )
                    {
                        throw new Error('medalSelectItemHtml must have medal')
                    }

                const goToBrandMedalModelListButtonHtmlContent = await goToBrandMedalModelListButtonHtml(
                    {
                        brand: brand,
                        medal: medal
                    }
                ) 

                let liClassProperty = '';

                if
                (
                    selectedMedal &&
                    medal.id == selectedMedal.id
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
                                    src = '/statics/images/brand/acura-logo.png'
                                />
                            </dd>
                            
                            <dt>
                                عنوان فارسی
                            </dt>
                            <dd>
                                ${medal.title_fa}
                            </dd>
                            <dt>
                            عنوان انگلیسی
                            </dt>
                            <dd>
                                ${medal.title_en}
                            </dd>
                            <dt>
                                وزن
                            </dt>
                            <dd>
                                ${weightLabel({weight:medal.weight})}
                            </dd>
                        </dl>

                        <ul>
                            <li>
                                ${goToBrandMedalModelListButtonHtmlContent}
                            </li>
                        </ul>
                    </li>
                `
            }
    }
