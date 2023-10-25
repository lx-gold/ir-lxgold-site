module.exports = function buildGoToBrandChainRingModelListHtml
()
    {
        return async function goToBrandChainRingModelListHtml
        (
            {
                brand,
                medal,
                chain,
                ring
            }
        )
            {
                if
                (
                    !brand
                )
                    {
                        throw new Error('goToBrandChainRingModelListHtml must have brand');
                    }

                if
                (
                    !medal
                )
                    {
                        throw new Error('goToBrandChainRingModelListHtml must have medal');
                    }
                if
                (
                    !chain
                )
                    {
                        throw new Error('goToBrandChainRingModelListHtml must have chain');
                    }

                if
                (
                    !ring
                )
                    {
                        throw new Error('goToBrandChainRingModelListHtml must have ring');
                    }
                
                const content = `
                    <a
                        href='/models/brand/${brand.id}/medal/${medal.id}/chain/${chain.id}/ring/${ring.id}/'
                        title='لیست مدل های ${brand.title_fa} با مدال ${medal.title_fa} و زنجیر ${chain.title_fa} و حلقه ${ring.title_fa}'
                    >
                        ${ring.title_fa}
                    </a>
                `
                return content;
            }
    }