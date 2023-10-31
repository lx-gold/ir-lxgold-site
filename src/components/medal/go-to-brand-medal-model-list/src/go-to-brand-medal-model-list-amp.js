module.exports = function buildGoToBrandMedalModelListAmp
()
    {
        return async function goToBrandMedalModelListAmp
        (
            {
                brand,
                medal
            }
        )
            {
                if
                (
                    !brand
                )
                    {
                        throw new Error('goToBrandChainModelListAmp must have brand');
                    }

                if
                (
                    !medal
                )
                    {
                        throw new Error('goToBrandChainModelListAmp must have medal');
                    }
                
                const content = `
                    <a
                        href='/amp/models/brand/${brand.id}/medal/${medal.id}/'
                        title='لیست مدل های ${brand.title_fa} با طرح ${medal.title_fa}'
                    >
                        انتخاب
                    </a>
                `
                return content;
            }
    }