const buildGetPathFromDirectoryList = require('./src/get-path-from-directory-list');
const buildSaveFile = require('./src/save-file');
const buildCreatePath = require('./src/create-path');

module.exports = function
(
    {
        STORAGE_PATH,
        fs,
        minify
    }
)
    {

        const getPathFromDirectoryList = buildGetPathFromDirectoryList(
            {
                STORAGE_PATH: STORAGE_PATH
            }
        );

        const createPath = buildCreatePath(
            {
                fs: fs,
                STORAGE_PATH: STORAGE_PATH
            }
        );

        const saveFile = buildSaveFile(
            {
                fs: fs,
                minify: minify,
                getPathFromDirectoryList: getPathFromDirectoryList,
                createPath: createPath
            }
        );

        const service = Object.freeze(
            {
                saveFile
            }
        );

        return service;

    }