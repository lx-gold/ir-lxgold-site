module.exports = function buildGoToModelDetailAmp
()
    {
        return async function goToModelDetailAmp
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
                        throw new Error('goToModelDetailAmp must have model');
                    }

                const content = `
                    <a
                        href='/amp/models/${model.id}/'
                        title='خرید آنلاین سوئیج طلا'
                    >
                        ${model.title}
                    </a>
                `
                
                return content;
            }
    }