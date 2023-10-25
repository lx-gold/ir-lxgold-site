module.exports = function buildGetPathFromDirectoryList
(
    {
        STORAGE_PATH
    }
)
    {
        if
        (
            !STORAGE_PATH
        )
            {
                throw new Error('buildGetPathFromDirectoryList mush have STORAGE_PATH');
            }
        return async function getPathFromDirectoryList
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
                        throw new Error('buildGetPathFromDirectoryList mush have directoryList');
                    }

                const path = `${STORAGE_PATH}/`+directoryList.join('/');
                
                return path;
            }
    }