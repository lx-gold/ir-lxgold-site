module.exports = function buildHeadTag
(
    {
        headCssTag,
        headTitleTag,
        generateDescription,
        headDescriptionTag,
        headKeywordsTag,
        headCanonicalTag,
        headAmphtmlTag,
        headIconSetTagList,
        headOgTagList
    }
)
    {
        if
        (
            !headCssTag
        )
            {
                throw new Error('buildHeadTag must have headCssTag')
            }

        if
        (
            !headTitleTag
        )
            {
                throw new Error('buildHeadTag must have headTitleTag')
            }

        if
        (
            !generateDescription
        )
            {
                throw new Error('buildHeadTag must have generateDescription')
            }

        if
        (
            !headDescriptionTag
        )
            {
                throw new Error('buildHeadTag must have headDescriptionTag')
            }

              
        if
        (
            !headKeywordsTag
        )
            {
                throw new Error('buildHeadTag must have headKeywordsTag')
            }

        if
        (
            !headCanonicalTag
        )
            {
                throw new Error('buildHeadTag must have headCanonicalTag')
            }
        
        if
        (
            !headAmphtmlTag
        )
            {
                throw new Error('buildHeadTag must have headAmphtmlTag')
            }

        if
        (
            !headIconSetTagList
        )
            {
                throw new Error('buildHeadTag must have headIconSetTagList')
            }

            
        if
        (
            !headOgTagList
        )
            {
                throw new Error('buildHeadTag must have headOgTagList')
            }
                
        return async function headTag
        (
            {
                keywordList,
                cssFileName,
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
                    !cssFileName
                )
                    {
                        throw new Error('headTag must have cssFileName')
                    }

                if
                (
                    !keywordList
                )
                    {
                        throw new Error('headTag must have keywordList')
                    }

                if
                (
                    keywordList &&
                    keywordList.length <= 0
                )
                    {
                        throw new Error('headTag keywordList must have one item at least')
                    }
                    
                const cssTag = await headCssTag(
                    {
                        fileName: cssFileName
                    }
                );

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

                const headAmphtmlTagContent = await headAmphtmlTag(
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

                const headOgTagListConent = await headOgTagList(
                    {
                        titleContent: descriptionContent,
                        descriptionContent: descriptionContent
                    }
                );

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
                    ${headAmphtmlTagContent}

                    ${headIconSetTagListContent}

                    ${headOgTagListConent}

                    ${cssTag}
                    <!-- Google tag (gtag.js) -->
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-L4CJQDJLS4"></script>
                    <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-L4CJQDJLS4');
                    </script>
                `;

                return result;
            }
    }