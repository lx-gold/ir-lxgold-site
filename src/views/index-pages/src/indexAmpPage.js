module.exports = function buildIndexAmpGenerator
(
    {
        headAmpTag,
        modelPanelRender,
        minifyCss
    }
)
    {
        if
        (
            !headAmpTag
        )
            {
                throw new Error('buildIndexAmpGenerator must have headAmpTag')
            }

        if
        (
            !modelPanelRender
        )
            {
                throw new Error('buildIndexAmpGenerator must have modelPanelRender')
            }

        if
        (
            !minifyCss
        )
            {
                throw new Error('buildIndexAmpGenerator must have minifyCss')
            }


        const keywordList = [
            `جاسوئیچی طلا`
        ];
        return async function indexAmpGenerator
        (
            {
                modelList,
                brandList
            }
        )
            {
                if
                (
                    !modelList
                )
                    {
                        throw new Error('indexAmpGenerator must have modelList')
                    }

                if
                (
                    !brandList
                )
                    {
                        throw new Error('indexAmpGenerator must have brandList')
                    }

                const minifiedCss = await minifyCss(
                    {
                        fileName: 'index.css'
                    }
                );
                    
                const headAmpTagContent = await headAmpTag(
                    {
                        keywordList :keywordList,
                        minifiedCss: minifiedCss

                    }
                );
                
                const modelPanleContent = await modelPanelRender(
                    {
                        brandList: brandList,
                        modelList: modelList
                    }
                );

                const headerContent = '';
            
                const footerContent = '';

                return `
                    <!doctype html>
                        <html ⚡="" lang="fa" dir="rtl">
                        <head>
                            ${headAmpTagContent}
                        </head>
                        <body>
                            <amp-analytics type="gtag" data-credentials="include">
                                <script type="application/json">
                                {
                                "vars" : {
                                    "gtag_id": "G-L4CJQDJLS4",
                                    "config" : {
                                    "G-L4CJQDJLS4": { "groups": "default" }
                                    },
                                    "triggers": {
                                    "trackPageview": {
                                        "on": "visible",
                                        "request": "pageview"
                                    }
                                    }
                                }
                                }
                                </script>
                            </amp-analytics>
                            ${headerContent}
                            <main>
                                <h1>
                                    جاسونیچی طلا
                                </h1>
                                ${modelPanleContent}
                            </main>
                            ${footerContent}
                        </body>
                    </html>
                `
            }
    };