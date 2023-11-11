module.exports = function buildBrandMedalModelListHtmlPage
(
    {
        headTag,
        modelBrandMedalPanelHtmlRender,
        headerHtml
    }
)
    {
        if
        (
            !headTag
        )
            {
                throw new Error('buildBrandMedalModelListHtmlPage must have headTag')
            }

        if
        (
            !modelBrandMedalPanelHtmlRender
        )
            {
                throw new Error('buildBrandMedalModelListHtmlPage must have modelBrandMedalPanelHtmlRender')
            }
        
        if
        (
            !headerHtml
        )
            {
                throw new Error('buildBrandMedalModelListHtmlPage must have headerHtml')
            }

            
        const keywordList = [
            `جاسوئیچی طلا`
        ];
        return async function brandMedalModelListHtmlPage
        (
            {
                modelList,
                brandList,
                selectedBrand,
                medalList,
                medal,
                chainList
            }
        )
            {
                if
                (
                    !modelList
                )
                    {
                        throw new Error('brandMedalModelListHtmlPage must have modelList')
                    }

                if
                (
                    !brandList
                )
                    {
                        throw new Error('brandMedalModelListHtmlPage must have brandList')
                    }

                if
                (
                    !selectedBrand
                )
                    {
                        throw new Error('brandMedalModelListHtmlPage must have selectedBrand')
                    }

                if
                (
                    !medalList
                )
                    {
                        throw new Error('brandMedalModelListHtmlPage must have medalList')
                    }

                if
                (
                    !medal
                )
                    {
                        throw new Error('brandMedalModelListHtmlPage must have medal')
                    }

                if
                (
                    !chainList
                )
                    {
                        throw new Error('brandMedalModelListHtmlPage must have chainList')
                    }
                

                const headContent = await headTag(
                    {
                        keywordList :keywordList,
                        cssFileName: 'brand-medal-model-list.css',
                        brand: selectedBrand,
                        medal:medal
                    }
                );

                const modelMedalPanleHtmlContent = await modelBrandMedalPanelHtmlRender(
                    {
                        brandList: brandList,
                        selectedBrand: selectedBrand,
                        medalList: medalList,
                        selectedMedal:medal,
                        chainList: chainList,
                        modelList: modelList,
                    }
                );

                const headerContent = headerHtml();

                const h1Content = `جاسوئیچی طلا ${selectedBrand.title_fa} مدل ${medal.title_fa}`
                
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
                                    ${h1Content}
                                </h1>
                                ${modelMedalPanleHtmlContent}
                            </main>
                        </body>
                    </html>
                `
            }
    }