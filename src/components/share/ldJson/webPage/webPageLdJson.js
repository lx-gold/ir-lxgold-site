module.exports = function buildWebPageLdJson
()
    {
        return async function webPageLdJson
        (
            {
                name,
                description
            }
        )
            {
                if
                (
                    !name
                )
                    {
                        throw new Error('webPageLdJson must have name')
                    }

                if
                (
                    !description
                )
                    {
                        throw new Error('webPageLdJson must have description')
                    }

                const result = `
                    <script
                        type="application/ld+json"
                    >
                        {
                            "@context": "http://schema.org",
                            "@type": "WebPage",
                            "name": "${name}",
                            "description": "${description}"
                        }
                    </script>
                `;

                return result;
            }
    }