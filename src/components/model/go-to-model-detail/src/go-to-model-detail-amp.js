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
                        انتخاب
                    </a>
                `
                
                return content;
            }
    }