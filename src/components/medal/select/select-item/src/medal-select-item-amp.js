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
                        ${medal.title_fa}
                        ${goToBrandMedalModelListButtonAmpContent}
                    </li>
                `
            }
    }
