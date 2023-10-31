module.exports = function buildModelDetailHtmlPage
(
    {
        headTag,
        modelDetailHtmlRender,
        modelDescriptionHtmlRender,
        modelLdJson,
        modelWebPageLdJson
    }
)
    {
        if
        (
            !headTag
        )
            {
                throw new Error('buildModelDetailHtmlPage must have headTag')
            }

        if
        (
            !modelDetailHtmlRender
        )
            {
                throw new Error('buildModelDetailHtmlPage must have modelDetailHtmlRender')
            }

        if
        (
            !modelDescriptionHtmlRender
        )
            {
                throw new Error('buildModelDetailHtmlPage must have modelDescriptionHtmlRender')
            }            
            

        if
        (
            !modelLdJson
        )
            {
                throw new Error('buildModelDetailHtmlPage must have modelLdJson')
            }

        if
        (
            !modelWebPageLdJson
        )
            {
                throw new Error('buildModelDetailHtmlPage must have modelWebPageLdJson')
            }
        
        
        return async function modelDetailHtmlPage
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
                        throw new Error('modelDetailHtmlPage must have model')
                    }


                const keywordList = [
                    `جاسوئیچی طلا`
                ];

                const headContent = await headTag(
                    {
                        keywordList: keywordList,
                        cssFileName:'model-detail.css',
                        model: model,
                        isDetail: true
                    }
                );

                const modelDetailHtmlContent = await modelDetailHtmlRender(
                    {
                        model:model
                    }
                );

                const modelDescriptionHtmlContent = await modelDescriptionHtmlRender(
                    {
                        model:model
                    }
                );

                const modelLdJsonContent = await modelLdJson(
                    {
                        model:model
                    }
                );

                const modelWebPageLdJsonContent = await modelWebPageLdJson(
                    {
                        model:model
                    }
                );

                
                return `
                    <!doctype html>
                    <html lang='fa'>
                        <head>
                            ${headContent}

                            ${modelLdJsonContent}
                            ${modelWebPageLdJsonContent}
                        </head>
                        <body>

                            <main>
                                ${modelDescriptionHtmlContent}
                            </main>

                            <ul class="model-details">
                                ${modelDetailHtmlContent}
                            </ul>

                        </body>
                    </html>
                `
            }
    }