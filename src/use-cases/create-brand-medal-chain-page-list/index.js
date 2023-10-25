const buildCreateBrandMedalChainHtmlPage = require('./src/create-brand-medal-chain-html-page');
const buildCreateBrandMedalChainAmpPage = require('./src/create-brand-medal-chain-amp-page');
const buildCreateBrandMedalChainPageList = require('./src/create-brand-medal-chain-page-list');

module.exports = function
(
    {
        getAllBrandDB,
        brandMedalChainModelListPageRender,
        saveFile,
        getAllMedalByBrandDB,
        getAllChainByBrandAndMedalDB,
        getAllRingByBrandAndMedalChainDB,
        getAllModelListByBrandAndMedalAndChainDB
    }
)
    {
        const createBrandMedalChainHtmlPage = buildCreateBrandMedalChainHtmlPage(
            {
                brandMedalChainModelListPageHtmlRender: brandMedalChainModelListPageRender.html,
                saveFile: saveFile
            }
        );

        const createBrandMedalChainAmpPage = buildCreateBrandMedalChainAmpPage(
            {
                brandMedalChainModelListPageAmpRender: brandMedalChainModelListPageRender.amp,
                saveFile: saveFile
            }
        );

        const createBrandMedalChainPageList = buildCreateBrandMedalChainPageList(
            {
                createBrandMedalChainHtmlPage: createBrandMedalChainHtmlPage,
                createBrandMedalChainAmpPage: createBrandMedalChainAmpPage,
                getAllBrandDB: getAllBrandDB,
                getAllMedalByBrandDB: getAllMedalByBrandDB,
                getAllChainByBrandAndMedalDB: getAllChainByBrandAndMedalDB,
                getAllRingByBrandAndMedalChainDB: getAllRingByBrandAndMedalChainDB,
                getAllModelListByBrandAndMedalAndChainDB: getAllModelListByBrandAndMedalAndChainDB
            }
        );

        const services = Object.freeze(
            {
                createBrandMedalChainPageList
            }
        );

        return services;
    }