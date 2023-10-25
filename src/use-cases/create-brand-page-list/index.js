const buildCreateBrandHtmlPage = require('./src/create-brand-html-page');
const buildCreateBrandAmpPage = require('./src/create-brand-amp-page');
const buildCreateBrandPageList = require('./src/create-brand-page-list');

module.exports = function
(
    {
        brandModelListPageRender,
        getAllModelListByBrandDB,
        getAllBrandDB,
        saveFile,
        getAllMedalByBrandDB,
    }
)
    {
        const createBrandHtmlPage = buildCreateBrandHtmlPage(
            {
                brandModelListPageHtmlRender: brandModelListPageRender.html,
                saveFile:saveFile
            }
        );

        const createBrandAmpPage = buildCreateBrandAmpPage(
            {
                brandModelListPageAmpRender: brandModelListPageRender.amp,
                saveFile:saveFile
            }
        )

        const createBrandPageList = buildCreateBrandPageList(
            {
                createBrandHtmlPage: createBrandHtmlPage,
                createBrandAmpPage: createBrandAmpPage,
                getAllBrandDB: getAllBrandDB,
                getAllMedalByBrandDB: getAllMedalByBrandDB,
                getAllModelListByBrandDB : getAllModelListByBrandDB
            }
        );

        const services = Object.freeze(
            {
                createBrandPageList
            }
        );

        return services;
    }