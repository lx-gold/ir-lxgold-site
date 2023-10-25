module.exports = function buildHeadAmpTag
(
    {
        headTitleTag,
        headDescriptionTag,
        headCanonicalTag,
        headIconSetTagList,
        headKeywordsTag,
        generateDescription,
    }

)
    {
        if
        (
            !headTitleTag
        )
            {
                throw new Error('buildHeadAmpTag must have headTitleTag')
            }

        if
        (
            !headDescriptionTag
        )
            {
                throw new Error('buildHeadAmpTag must have headDescriptionTag')
            }

        if
        (
            !headCanonicalTag
        )
            {
                throw new Error('buildHeadAmpTag must have headCanonicalTag')
            }

        if
        (
            !headIconSetTagList
        )
            {
                throw new Error('buildHeadAmpTag must have headIconSetTagList')
            }

        if
        (
            !headKeywordsTag
        )
            {
                throw new Error('buildHeadAmpTag must have headKeywordsTag')
            }

        if
        (
            !generateDescription
        )
            {
                throw new Error('buildHeadAmpTag must have generateDescription')
            }

        return async function headAmpTag
        (
            {
                keywordList,
                minifiedCss,
                brand,
                medal,
                chain,
                ring,
                model,
                isBlog,
				isHowTo,
				isDetail
            }
        )
            {
                if
                (
                    !minifiedCss
                )
                    {
                        throw new Error('headAmpTag must have minifiedCss')
                    }

                if
                (
                    !keywordList
                )
                    {
                        throw new Error('headAmpTag must have keywordList')
                    }

                if
                (
                    keywordList &&
                    keywordList.length <= 0
                )
                    {
                        throw new Error('headTag keywordList must have one item at least')
                    }
                    

                const descriptionContent = await generateDescription(
                    {
                        brand: brand,
                        medal: medal,
                        chain: chain,
                        ring: ring,
                        model: model,
                        isBlog: isBlog,
                        isHowTo: isHowTo,
                        isDetail: isDetail
                    }
                );

                const titleTagContent = await headTitleTag(
                    {
                        titleContnet: descriptionContent
                    }
                );

                const descriptionTagContent = await headDescriptionTag(
                    {
                        descriptionContent: descriptionContent
                    }
                );

                const keywordsTagContent = await headKeywordsTag(
                    {
                        keywordList: keywordList
                    }
                );

                const canonicalTagContent = await headCanonicalTag(
                    {
                        brand: brand,
                        medal: medal,
                        chain: chain,
                        ring: ring,
                        model: model,
                        isBlog: isBlog,
                        isHowTo: isHowTo,
                        isDetail: isDetail
                    }
                );

                const headIconSetTagListContent = await headIconSetTagList();


                const result = `
                    ${titleTagContent}
                    ${descriptionTagContent}

                    <meta charset="utf-8">
                    <meta name="author" content="لوکس گلد">
                    <meta name="robots" content="index, follow">
                    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
                    <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
                    <meta name="viewport" content="width=device-width, initial-scale=1, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
                    <link rel="manifest" href="/manifest.json">
           
                    ${keywordsTagContent}
                    ${canonicalTagContent}

                    ${headIconSetTagListContent}


                    <style
                        amp-boilerplate
                    >
                        body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
                    </style>

                    <noscript>
                        <style amp-boilerplate>
                            body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}
                        </style>
                    </noscript>
                    
                    <script async src="https://cdn.ampproject.org/v0.js"></script>
                    <script async custom-element="amp-mega-menu" src="https://cdn.ampproject.org/v0/amp-mega-menu-0.1.js"></script>
                    <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
                    <style amp-custom>
                    ${minifiedCss}
                    </style amp-custom>
                `;

                return result;
                
            }
    }