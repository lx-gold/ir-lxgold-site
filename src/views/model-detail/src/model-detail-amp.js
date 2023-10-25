module.exports = function buildModelDetailAmpPage
(
    {
        headAmpTag,
        modelDetailAmpRender,
        modelDescriptionAmpRender,
        minifyCss
    }
)
    {
        if
        (
            !headAmpTag
        )
            {
                throw new Error('buildModelDetailAmpPage must have headAmpTag')
            }

        if
        (
            !modelDetailAmpRender
        )
            {
                throw new Error('buildModelDetailAmpPage must have modelDetailAmpRender')
            }


        if
        (
            !modelDescriptionAmpRender
        )
            {
                throw new Error('buildModelDetailAmpPage must have modelDescriptionAmpRender')
            }

        if
        (
            !minifyCss
        )
            {
                throw new Error('buildModelDetailAmpPage must have minifyCss')
            }
        
        
        return async function modelDetailAmpPage
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
                        throw new Error('modelDetailAmpPage must have model')
                    }


                const keywordList = [
                    `جاسوئیچی طلا`
                ];

                const minifiedCss = await minifyCss(
                    {
                        fileName: 'model-detail.css'
                    }
                );

                const headAmpContent = await headAmpTag(
                    {
                        keywordList :keywordList,
                        minifiedCss: minifiedCss,
                        model:model,
                        isDetail: true

                    }
                );

                const modelDetailAmpContent = await modelDetailAmpRender(
                    {
                        model:model
                    }
                );

                const modelDescriptionAmpContent = await modelDescriptionAmpRender(
                    {
                        model:model
                    }
                );
                
                return `
                    <!doctype html>
                    <html ⚡="" lang="fa" dir="rtl">
                        <head>
                            ${headAmpContent}
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
                            <main>
                                ${modelDescriptionAmpContent}
                            </main>

                            <aside>
                                ${modelDetailAmpContent}
                            </aside>
                        </body>
                    </html>
                `
            }
    }