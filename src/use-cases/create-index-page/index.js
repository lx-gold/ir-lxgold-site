const buildGenerateIndexPage = require('./src/generate-index-page');
const buildGenerateIndexAmpPage = require('./src/creae-index-amp-page');
const buildCreateIndexPage = require('./src/create-index.page');


module.exports = function
(
    {
        indexPagesViews,
        saveFile,
        modelList,
        brandList
    }
)
    {
        const generateIndexPage = buildGenerateIndexPage(
            {
                indexGenerator:indexPagesViews.html,
                saveFile:saveFile,
                modelList: modelList,
                brandList: brandList
            }
        );

        const generateIndexAmpPage = buildGenerateIndexAmpPage(
            {
                indexAmpGenerator: indexPagesViews.amp,
                saveFile:saveFile,
                modelList: modelList,
                brandList: brandList
            }
        );

        const createIndexPage = buildCreateIndexPage(
            {
                generateIndexPage: generateIndexPage,
                generateIndexAmpPage: generateIndexAmpPage
            }
        );

        const services = Object.freeze(
            {
                createIndexPage
            }
        );

        return services;
    }