module.exports = function buildHeadCanonicalTag
()
    {
        return async function headCanonicalTag
        (
            {
                brand,
                medal,
                chain,
                ring,
                model,
                isBlog,
				isHowTo,
				isDetail
           }
        )
            {
                const domain = `https://lxgold.ir`;

                let url = '';

                if
                (
                    brand &&
                    !medal &&
                    !chain &&
                    !ring && 
                    !model
                )
                    {
                        url = `${domain}/brand/${brand.id}`;
                    }
                else if
                (
                    brand &&
                    medal &&
                    !chain &&
                    !ring && 
                    !model
                )
                    {
                        url = `${domain}/brand/${brand.id}/medal/${medal.id}`;
                    }
                else if
                (
                    brand &&
                    medal &&
                    chain &&
                    !ring && 
                    !model
                )
                    {
                        url = `${domain}/brand/${brand.id}/medal/${medal.id}/chain/${chain.id}/`;
                    }
                else if
                (
                    brand &&
                    medal &&
                    chain &&
                    ring && 
                    !model
                )
                    {
                        url = `${domain}/brand/${brand.id}/medal/${medal.id}/chain/${chain.id}/ring/${ring.id}/`;
                    }
                else if
                (
                    !brand &&
                    !medal &&
                    !chain &&
                    !ring && 
                    model
                )
                    {
                        let middleUrl = ''
                        if
                        (
                            isDetail
                        )
                            {
                                middleUrl = 'model'
                            }
                        else if
                        (
                            isBlog
                        )
                            {
                                middleUrl = 'blog'
                            }
                        else if
                        (
                            isHowTo
                        )
                            {
                                middleUrl = 'howTo'
                            }

                        url = `${domain}/${middleUrl}/${model.id}/`;
                       
                    }

                else
                    {
                        url = `${domain}/`;
                    }


                const result = `
                    <link
                        rel="canonical"
                        href="${url}"
                    />
                `;
                return result;
            }
    }