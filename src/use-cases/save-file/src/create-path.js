module.exports = function buildCreatePath
(
    {
        fs,
        STORAGE_PATH
    }
)
    {
        if
        (
            !fs
        )
            {
                throw new Error('buildCreatePath mush have fs');
            }

        if
        (
            !STORAGE_PATH
        )
            {
                throw new Error('buildCreatePath mush have STORAGE_PATH');
            }
        return async function createPath
        (
            {
                directoryList
            }  
        )
            {
                if
                (
                    !directoryList
                )
                    {
                        throw new Error('createPath mush have directoryList');
                    }

                if
                (
                    !fs.existsSync(STORAGE_PATH)
                )
                    {
                        throw new Error(`Storage Path doese not exist at ${STORAGE_PATH}`);
                    }

                let path = STORAGE_PATH;

                directoryList.forEach(directory => 
                    {
                        let nextFolder = `${path}/${directory}`;
                        if
                        (
                            !fs.existsSync(nextFolder)
                        )
                            {
                                fs.mkdirSync(nextFolder);
                            }
                        path = nextFolder;
                    }
                );

            }
    }