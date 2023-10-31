module.exports = function buileModelListItemAmp
(
    {
        goToModelDetailAmp
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
                                <img
                                    src = '/statics/images/brand/acura-logo.png'
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