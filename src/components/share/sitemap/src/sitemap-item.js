module.exports = function buildSitemapItem
()
    {
        return async function sitemapItem
        (
            {
                loc,
                lastmod,
                priority
            }
        )
            {
                if
                (
                    !loc
                )
                    {
                        throw new Error('sitemapItem must have loc')
                    }

                if
                (
                    !lastmod
                )
                    {
                        throw new Error('sitemapItem must have lastmod')
                    }

                if
                (
                    !priority
                )
                    {
                        throw new Error('sitemapItem must have priority')
                    }

                const result = `
                    <url>
                        <loc>${loc}</loc>
                        <lastmod>${lastmod}</lastmod>
                        <priority>${priority}</priority>
                    </url>
                `;

                return result;
            }
    }