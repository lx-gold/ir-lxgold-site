module.exports = function buildIndexGenerator
(
    {
        headTag,
        modelPanelRender
    }
)
    {
        if
        (
            !headTag
        )
            {
                throw new Error('buildIndexGenerator must have headTag')
            }

        if
        (
            !modelPanelRender
        )
            {
                throw new Error('buildIndexGenerator must have modelPanelRender')
            }

        const keywordList = [
            `جاسوئیچی طلا`
        ];
        return async function indexGenerator
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
                        throw new Error('indexGenerator must have modelList')
                    }

                if
                (
                    !brandList
                )
                    {
                        throw new Error('indexGenerator must have brandList')
                    }
                    
                const headContent = await headTag(
                    {
                        keywordList :keywordList,
                        cssFileName:'index.css'

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
                    <html lang='fa'>
                        <head>
                            ${headContent}
                        </head>
                        <body>
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