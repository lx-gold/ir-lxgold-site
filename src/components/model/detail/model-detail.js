module.exports = function buileModelDetail
()
    {
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
                    </li>

                `

            }
    }