module.exports = function buildModelDescription
()
    {
        return async function modelDescription
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
                        throw new Error('modelDescription must have model');
                    }

                const modelTitle = `
                    جاسوئیچی طلا ماشین ${model.brand.title_fa} مدل ${model.medal.title_fa} با زنجیر ${model.chain.title_fa} و حلقه ${model.ring.title_fa}
                `;

                const brandContent = `
                    این مدل جاسوئیچی طلا مخصوص ماشین ${model.brand.title_fa} میباشد.
                `;

                const medalContent = `
                    مدال این جاسوئیچی ${model.medal.title_fa} است و وزن آن حدود ${model.medal.weight} گرم میباشد.
                `;

                const chainContent = `
                    بخش زنجیز این جاسوئیچی از نوع ${model.chain.title_fa} است که وزن این بخش حدود ${model.chain.weight} گرم میباشد.
                `

                const ringContent = `
                    حلقه ی این جاسوئیچی از جنس طلا و مدل ${model.ring.title_fa} است به وزن حدود ${model.ring.weight} گرم.
                `

                
                return `
                        <img
                            src = 'https://assets.lxgold.ir/images/brand/acura-logo.png'
                        />
                    <article>

                        <h2>
                            ${modelTitle}
                        </h2>

                        

                        <p>
                            ${brandContent}
                        </p>

                        <p>
                            ${medalContent}
                        </p>
                        
                        <p>
                            ${chainContent}
                        </p>

                        <p>
                            ${ringContent}
                        </p>

                    </article>

                   
                `
            }
    }