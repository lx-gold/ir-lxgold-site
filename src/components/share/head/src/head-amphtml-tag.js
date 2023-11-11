module.exports = function buildHeadAmphtmlTag
()
    {
        return async function headAmphtmlTag
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
                const domain = `https://lxgold.ir/amp`;

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
                        url = `${domain}/models/brand/${brand.id}`;
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
                        url = `${domain}/models/brand/${brand.id}/medal/${medal.id}`;
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
                        url = `${domain}/models/brand/${brand.id}/medal/${medal.id}/chain/${chain.id}`;
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
                        url = `${domain}/models/brand/${brand.id}/medal/${medal.id}/chain/${chain.id}/ring/${ring.id}`;
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
                        url = `${domain}`;
                    }



                const result = `
                    <link
                        rel="amphtml"
                        href='${url}'
                    />
                `;
                return result;
            }
    }