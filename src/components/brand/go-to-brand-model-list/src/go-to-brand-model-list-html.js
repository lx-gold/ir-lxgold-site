module.exports = function buildGoToBrandModelListHtml
()
    {
        return async function goToBrandModelListHtml
        (
            {
                brand
            }
        )
            {
                if
                (
                    !brand
                )
                    {
                        throw new Error('goToBrandModelListHtml must have brand');
                    }
                
                const content = `
                    <a
                        href='/models/brand/${brand.id}/'
                        title='لیست مدل های ${brand.title_fa}'
                    >
                        انتخاب
                    </a>
                `
                return content;
            }
    }