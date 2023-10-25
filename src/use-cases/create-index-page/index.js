const buildGenerateIndexPage = require('./src/generate-index-page');
const buildGenerateIndexAmpPage = require('./src/creae-index-amp-page');
const buildCreateIndexPage = require('./src/create-index.page');


module.exports = function
(
    {
        indexPagesViews,
        saveFile,
        getAllModelListDB,
        getAllBrandListDB
    }
)
    {
        const generateIndexPage = buildGenerateIndexPage(
            {
                indexGenerator:indexPagesViews.html,
                saveFile:saveFile,
                getAllModelListDB: getAllModelListDB,
                getAllBrandListDB: getAllBrandListDB
            }
        );

        const generateIndexAmpPage = buildGenerateIndexAmpPage(
            {
                indexAmpGenerator: indexPagesViews.amp,
                saveFile:saveFile,
                getAllModelListDB: getAllModelListDB,
                getAllBrandListDB: getAllBrandListDB
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