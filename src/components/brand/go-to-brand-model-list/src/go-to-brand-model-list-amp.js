module.exports = function buildGoToBrandModelListAmp
()
    {
        return async function goToBrandModelListAmp
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
                        throw new Error('goToBrandModelListAmp must have brand');
                    }
                
                const content = `
                    <a
                        href='/amp/models/brand/${brand.id}/'
                        title='لیست مدل های ${brand.title_fa}'
                    >
                        انتخاب
                    </a>
                `
                return content;
            }
    }