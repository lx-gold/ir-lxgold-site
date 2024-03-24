module.exports = function buileModelListItemAmp
(
    {
        goToModelDetailAmp,
        priceLabel,
        weightLabel
    }
)
    {
        if
        (
            !goToModelDetailAmp
        )
            {
                throw new Error('buileModelListItemAmp must have goToModelDetailAmp');
            }

        if
        (
            !priceLabel
        )
            {
                throw new Error('buileModelListItemAmp must have priceLabel');
            }

        if
        (
            !weightLabel
        )
            {
                throw new Error('buileModelListItemAmp must have weightLabel');
            }
        return async function modelListItemAmp
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
                        throw new Error('modelListItemAmp must have model');
                    }

                const goToModelDetailAmpContent = await goToModelDetailAmp(
                    {
                        model: model
                    }
                );
                
                return `
                    <li>
                        <dl>

                            <dt>
                                تصویر
                            </dt>
                            <dd>
                                <amp-img
                                    width="100px"
                                    height="100px"
                                    src = 'https://assets.lxgold.ir/images/model/${model.id}.png'
                                ></amp-img>
                            </dd>
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
                                قیمت
                            </dt>
                            <dd>
                                ${model.price}
                            </dd>

                            <dt>
                                وزن
                            </dt>
                            <dd>
                                ${model.weight}
                            </dd>

                        </dl>
                        ${goToModelDetailAmpContent}
                    </li>

                `

            }
    }