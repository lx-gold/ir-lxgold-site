const buildCreateModelPage = require('./src/create-model-page');
const buildCreateModelAmpPage = require('./src/create-model-amp-page');
const buildCreateModelPageList = require('./src/create-model-page-list');

module.exports = function
(
    {
        modelPageRender,
        getAllModelDB,
        saveFile,
        webPageLdJson
    }
)
    {
        const createModelPage = buildCreateModelPage(
            {
                modelPageRender: modelPageRender.html,
                saveFile: saveFile,
                webPageLdJson: webPageLdJson
            }
        );

        const createModelAmpPage = buildCreateModelAmpPage(
            {
                modelPageAmpRender: modelPageRender.amp,
                saveFile: saveFile
            }
        )

        const createModelPageList = buildCreateModelPageList(
            {
               createModelPage: createModelPage,
               createModelAmpPage: createModelAmpPage,
               getAllModelDB: getAllModelDB
            }
        );

        const services = Object.freeze(
            {
                createModelPageList
            }
        );

        return services;
    }