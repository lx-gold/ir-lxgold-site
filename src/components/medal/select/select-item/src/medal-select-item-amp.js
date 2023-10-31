module.exports = function buildMedalSelectItemAmp
(
    {
        goToBrandMedalModelListButtonAmp
    }
)
    {
        if
        (
            !goToBrandMedalModelListButtonAmp
        )
            {
                throw new Error('buildMedalSelectItemAmp must have goToBrandMedalModelListButtonAmp');
            }
        return async function medalSelectItemAmp
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
                        throw new Error('medalSelectItemAmp must have brand')
                    }

                if
                (
                    !medal
                )
                    {
                        throw new Error('medalSelectItemAmp must have medal')
                    }

                const goToBrandMedalModelListButtonAmpContent = await goToBrandMedalModelListButtonAmp(
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
                                ${medal.weight}
                            </dd>
                        </dl>

                        <ul>
                            <li>
                                ${goToBrandMedalModelListButtonAmpContent}
                            </li>
                        </ul>
                    </li>
                `
            }
    }
