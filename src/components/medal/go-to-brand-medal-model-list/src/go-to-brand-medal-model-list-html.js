module.exports = function buildGoToBrandMedalModelListHtml
()
    {
        return async function goToBrandMedalModelListHtml
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
                        throw new Error('goToBrandChainModelListHtml must have brand');
                    }

                if
                (
                    !medal
                )
                    {
                        throw new Error('goToBrandChainModelListHtml must have medal');
                    }
                
                const content = `
                    <a
                        href='/models/brand/${brand.id}/medal/${medal.id}/'
                        title='لیست مدل های ${brand.title_fa} با طرح ${medal.title_fa}'
                    >
                        انتخاب
                    </a>
                `
                return content;
            }
    }