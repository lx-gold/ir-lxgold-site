module.exports = function buildGoToBrandChainModelListAmp
()
    {
        return async function goToBrandChainModelListAmp
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
                        throw new Error('goToBrandChainModelListAmp must have brand');
                    }

                if
                (
                    !medal
                )
                    {
                        throw new Error('goToBrandChainModelListAmp must have medal');
                    }
                if
                (
                    !chain
                )
                    {
                        throw new Error('goToBrandChainModelListAmp must have chain');
                    }
                
                const content = `
                    <a
                        href='/amp/models/brand/${brand.id}/medal/${medal.id}/chain/${chain.id}/'
                        title='لیست مدل های ${brand.title_fa} با مدال ${medal.title_fa} و زنجیر ${chain.title_fa}'
                    >
                        ${chain.title_fa}
                    </a>
                `
                return content;
            }
    }