module.exports = function buildGenerateDescription
()
    {
        return async function generateDescription
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

                if
                (
                    brand &&
                    !medal &&
                    !chain &&
                    !ring && 
                    !model
                )
                    {
                        const result = `لوکس گلد | خرید آنلان جاسوئیچی طلا ماشین ${brand.title_fa}`;

                        return result;
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
                        const result = `لوکس گلد | خرید آنلان جاسوئیچی طلا ماشین ${brand.title_fa} با مدال ${medal.title_fa}`;

                        return result;
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
                        const result = `لوکس گلد | خرید آنلان جاسوئیچی طلا ماشین ${brand.title_fa} با مدال ${medal.title_fa} و زنجیر ${chain.title_fa}`;

                        return result;
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
                        const result = `لوکس گلد | خرید آنلان جاسوئیچی طلا ماشین ${brand.title_fa} با مدال ${medal.title_fa} و زنجیر ${chain.title_fa} و حلقه ${ring.title_fa}`;

                        return result;
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
                        let startWith = ''
                        if
                        (
                            isDetail
                        )
                            {
                                startWith = 'خرید آنلاین'
                            }
                        else if
                        (
                            isBlog
                        )
                            {
                                startWith = 'معرفی'
                            }
                        else if
                        (
                            isHowTo
                        )
                            {
                                startWith = 'راهنمای خرید'
                            }

                        const result = `لوکس گلد |  ${startWith} جاسوئیچی طلا ماشین ${model.brand.title_fa} با مدال ${model.medal.title_fa} و زنجیر ${model.chain.title_fa} و حلقه ${model.ring.title_fa}`;

                        return result;
                       
                    }

                else
                    {
                        const result = `لوکس گلد | خرید آنلان جاسوئیچی طلا انواع ماشین ها`;

                        return result;
                    }


            }
    }