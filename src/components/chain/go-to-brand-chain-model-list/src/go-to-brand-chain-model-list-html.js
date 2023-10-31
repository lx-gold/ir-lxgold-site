module.exports = function buildGoToBrandChainModelListHtml
()
    {
        return async function goToBrandChainModelListHtml
        (
            {
                brand,
                medal,
                chain
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
                if
                (
                    !chain
                )
                    {
                        throw new Error('goToBrandChainModelListHtml must have chain');
                    }
                
                const content = `
                    <a
                        href='/models/brand/${brand.id}/medal/${medal.id}/chain/${chain.id}/'
                        title='لیست مدل های ${brand.title_fa} با مدال ${medal.title_fa} و زنجیر ${chain.title_fa}'
                    >
                        انتخاب
                    </a>
                `
                return content;
            }
    }