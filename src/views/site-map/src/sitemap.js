module.exports = function buildSiteMapPage
()
    {
        
        return async function siteMapPage
        (
            {
                siteMapUrlContent
            }
        )
            {
                if
                (
                    !siteMapUrlContent
                )
                    {
                        throw new Error('siteMapPage must have siteMapUrlContent')
                    }

                    const fuckCommo = siteMapUrlContent.replaceAll(',','');

                    return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemalocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
                        ${fuckCommo}
                    </urlset>`
                        
                    ;
            }
    }