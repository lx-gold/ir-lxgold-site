const buildCreateBrandMedalHtmlPage = require('./src/create-brand-medal-html-page');
const buildCreateBrandMedalAmpPage = require('./src/create-brand-medal-amp-page');
const buildCreateBrandMedalPageList = require('./src/create-brand-medal-page-list');

module.exports = function
(
    {
        brandMedalModelListPageRender,
        getAllModelListByBrandAndMedalDB,
        getAllBrandDB,
        saveFile,
        getAllMedalByBrandDB,
        getAllChainByBrandAndMedalDB
    }
)
    {
        const createBrandMedalHtmlPage = buildCreateBrandMedalHtmlPage(
            {
                brandMedalModelListPageHtmlRender:brandMedalModelListPageRender.html,
                saveFile:saveFile,
            }
        );

        const createBrandMedalAmpPage= buildCreateBrandMedalAmpPage(
            {
                brandMedalModelListPageAmpRender:brandMedalModelListPageRender.amp,
                saveFile:saveFile,
            }
        );

        const createBrandMedalPageList = buildCreateBrandMedalPageList(
            {
                createBrandMedalHtmlPage: createBrandMedalHtmlPage,
                createBrandMedalAmpPage: createBrandMedalAmpPage,
                getAllBrandDB: getAllBrandDB,
                getAllMedalByBrandDB: getAllMedalByBrandDB,
                getAllModelListByBrandAndMedalDB : getAllModelListByBrandAndMedalDB,
                getAllChainByBrandAndMedalDB: getAllChainByBrandAndMedalDB
            }
        );

        const services = Object.freeze(
            {
                createBrandMedalPageList
            }
        );

        return services;
    }