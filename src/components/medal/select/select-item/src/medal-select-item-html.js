module.exports = function buildMedalSelectItemHtml
(
    {
        goToBrandMedalModelListButtonHtml
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
                        ${medal.title_fa}
                        ${goToBrandMedalModelListButtonHtmlContent}
                    </li>
                `
            }
    }
