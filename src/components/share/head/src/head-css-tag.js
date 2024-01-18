module.exports = function buildHeadCssTag
(
    {
        cssPath
    }
)
    {
        if
        (
            !cssPath
        )
            {
                throw new Error('buildHeadCssTag must have cssPath')
            }
        return function headCssTag
        (
            {

                fileName
            }
        )
            {
                // https://assets.lxgold.ir/style
                const cssTag = `
                    <link
                        rel="stylesheet"
                        href="${cssPath}/${fileName}"
                    >
                `;

                return cssTag

            }
    }