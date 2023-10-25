module.exports = function buildGoToModelDetailHtml
()
    {
        return async function goToModelDetailHtml
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
                        throw new Error('goToModelDetailHtml must have model');
                    }

                const content = `
                    <a
                        href='/models/${model.id}/'
                        title='خرید آنلاین سوئیج طلا'
                    >
                        ${model.title}
                    </a>
                `
                
                return content;
            }
    }