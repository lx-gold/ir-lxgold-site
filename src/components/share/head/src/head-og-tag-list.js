module.exports = function buildHeadOgTagList
()
    {
        return async function headOgTagList
        (
            {
                titleContent,
                descriptionContent
            }
        )
            {
                if
                (
                    !titleContent
                )
                    {
                        throw new Error('headOgTagList must have titleContent')
                    }

                if
                (
                    !descriptionContent
                )
                    {
                        throw new Error('headOgTagList must have descriptionContent')
                    }

                const result = `
                    <meta
                        property="og:url"
                        content="https://lxgold.ir"
                    />
                    <meta
                        property="og:type"
                        content="article"
                    />
                    <meta
                        property="og:title"
                        content="${titleContent}"
                    />
                    <meta
                        property="og:description"
                        content="${descriptionContent}"
                    />
                    <meta
                        property="og:image"
                        content="https://lxgold.ir/statics/images/logo/logo.png"
                    />
                `;
                return result;
            }
    }