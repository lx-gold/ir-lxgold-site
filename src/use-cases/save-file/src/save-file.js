module.exports = function buildSaveFile
(
    {
        fs,
        minify,
        getPathFromDirectoryList,
        createPath
    }
)
    {
        if
        (
            !fs
        )
            {
                throw new Error('buildSaveFile mush have fs');
            }

        if
        (
            !minify
        )
            {
                throw new Error('buildSaveFile mush have minify');
            }

        if
        (
            !getPathFromDirectoryList
        )
            {
                throw new Error('buildSaveFile mush have getPathFromDirectoryList');
            }

        if
        (
            !createPath
        )
            {
                throw new Error('buildSaveFile mush have createPath');
            }
        return async function saveFile
        (
            {
                directoryList,
                content,
                fileName
            }
        )
            {
                if
                (
                    !directoryList
                )
                    {
                        throw new Error('saveFile mush have directoryList');
                    }

                if
                (
                    !content
                )
                    {
                        throw new Error('saveFile mush have content');
                    }

                if
                (
                    !fileName
                )
                    {
                        throw new Error('saveFile mush have fileName');
                    }
                
                const path = await getPathFromDirectoryList(
                    {
                        directoryList: directoryList
                    }
                );

                try
                    {
                        
                        const minifyContent = minify(content, 
                            {
                                collapseWhitespace: true,
                                //collapseInlineTagWhitespace: true
                            }
                        );

                        await fs.promises.writeFile(path+'/'+fileName, minifyContent, 'utf8');    
                        
                    }
                catch (error) 
                    {
                        console.log(error);
                        await createPath(
                            {
                                directoryList: directoryList
                            }
                        );
                        await saveFile(
                            {
                                directoryList: directoryList,
                                content: content,
                                fileName:fileName
                            }
                        )
                    }
                
            }
    }
