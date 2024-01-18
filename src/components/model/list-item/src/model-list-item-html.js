module.exports = function buileModelListItemHtml
(
    {
        goToModelDetailHtml,
        priceLabel,
        weightLabel

    }
)
    {
        if
        (
            !goToModelDetailHtml
        )
            {
                throw new Error('buileModelListItemHtml must have goToModelDetailHtml');
            }

        if
        (
            !priceLabel
        )
            {
                throw new Error('buileModelListItemHtml must have priceLabel');
            }

        if
        (
            !weightLabel
        )
            {
                throw new Error('buileModelListItemHtml must have weightLabel');
            }
        return async function modelListItemHtml
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
                        throw new Error('modelListItemHtml must have model');
                    }

                const goToModelDetailHtmlContent = await goToModelDetailHtml(
                    {
                        model: model
                    }
                );

                console.log(model.id);
                return `
                    <li>
                        <dl>

                            <dt>
                                تصویر
                            </dt>
                            <dd>
                                <img
                                    src = 'https://assets.lxgold.ir/images/brand/acura-logo.png'
                                />
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
                                ${priceLabel({price: model.price})}
                            </dd>

                            <dt>
                                وزن
                            </dt>
                            <dd>
                                ${weightLabel({weight:model.weight})}
                            </dd>

                        </dl>
                        ${goToModelDetailHtmlContent}
                    </li>

                `

            }
    }