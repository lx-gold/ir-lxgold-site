module.exports = function buildMedalSelectItemAmp
(
    {
        goToBrandMedalModelListButtonAmp,
        weightLabel
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

        if
        (
            !weightLabel
        )
            {
                throw new Error('buildMedalSelectItemAmp must have weightLabel');
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
                                    src = 'https://assets.lxgold.ir/images/medal/${medal.thumbnail_file_name}'
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
                                ${goToBrandMedalModelListButtonAmpContent}
                            </li>
                        </ul>
                    </li>
                `
            }
    }
