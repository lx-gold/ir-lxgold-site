module.exports = function buileModelDetail
(
    {
        priceLabel,
        weightLabel
    }
)
    {
        if
        (
            !priceLabel
        )
            {
                throw new Error('buileModelDetail must have priceLabel');
            }

        if
        (
            !weightLabel
        )
            {
                throw new Error('buileModelDetail must have weightLabel');
            }
        return async function modelDetail
        (
            {
                model
            }
        )
            {
                if
                (
                    !model
                )
                    {
                        throw new Error('modelDetail must have model');
                    }

                
                
                return `
                    <li>
                        <dl>

                            

                            <dt>
                                عنوان
                            </dt>
                            <dd>
                                ${model.title}
                            </dd>
                            

                            <dt>
                                برند
                            </dt>
                            <dd>
                                ${model.brand.title_fa}
                            </dd>

                            <dt>
                                زنجیر
                            </dt>
                            <dd>
                                ${model.chain.title_fa}
                            </dd>

                            <dt>
                                حلقه
                            </dt>
                            <dd>
                                ${model.ring.title_fa}
                            </dd>

                            

                            <dt>
                                وزن
                            </dt>
                            <dd>
                                ${weightLabel({weight:model.weight})}
                            </dd>

                            <dt>
                                قیمت
                            </dt>
                            <dd>
                                ${priceLabel({price: model.price})}
                            </dd>

                        </dl>
                    </li>

                `

            }
    }