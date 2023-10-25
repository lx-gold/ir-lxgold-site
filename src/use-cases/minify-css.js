module.exports = function buildMinifyCss
(
    {
        STYLE_PATH,
        fs,
        minify
    }
)
    {
        if
        (
            !STYLE_PATH
        )
            {
                throw new Error('buildMinifyCss must have STYLE_PATH')
            }

        if
        (
            !fs
        )
            {
                throw new Error('buildMinifyCss must have fs')
            }

        if
        (
            !minify
        )
            {
                throw new Error('buildMinifyCss must have minify')
            }

        return async function minifyCss
        (
            {
                fileName
            }
        )
            {
                if
                (
                    !fileName
                )
                    {
                        throw new Error('minifyCss must have fileName')
                    }

                const cssFilePath = `${STYLE_PATH}/${fileName}`;
                
                const cssContent = fs.readFileSync(cssFilePath,'utf8');
                
                const minifyContent = minify(cssContent, 
                    {
                        collapseWhitespace: true,
                        //collapseInlineTagWhitespace: true
                    }
                );

                return minifyContent;
            }
    }