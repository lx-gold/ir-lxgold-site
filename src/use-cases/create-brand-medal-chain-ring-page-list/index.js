const buildCreateBrandMedalChainRingHtmlPage = require('./src/create-brand-medal-chain-ring-html-page');
const buildCreateBrandMedalChainRingAmpPage = require('./src/create-brand-medal-chain-ring-amp-page');
const buildCreateBrandMedalChainRingPageList = require('./src/create-brand-medal-chain-ring-page-list');

module.exports = function
(
    {
        brandMedalChainRingModelListPageRender,
        getAllBrandDB,
        saveFile,
        getAllMedalByBrandDB,
        getAllChainByBrandAndMedalDB,
        getAllRingByBrandAndMedalAndChainDB,
        getAllModelListByBrandAndMedalAndChainAndRingDB,
    }
)
    {
        const createBrandMedalChainRingHtmlPage = buildCreateBrandMedalChainRingHtmlPage(
            {
                brandMedalChainRingModelListHtmlPageRender: brandMedalChainRingModelListPageRender.html,
                saveFile: saveFile
            }
        );

        const createBrandMedalChainRingAmpPage = buildCreateBrandMedalChainRingAmpPage(
            {
                brandMedalChainRingModelListAmpPageRender:brandMedalChainRingModelListPageRender.amp,
                saveFile: saveFile
            }
        );

        const createBrandMedalChainRingPageList = buildCreateBrandMedalChainRingPageList(
            {
                createBrandMedalChainRingHtmlPage: createBrandMedalChainRingHtmlPage,
                createBrandMedalChainRingAmpPage: createBrandMedalChainRingAmpPage,
                getAllBrandDB:getAllBrandDB,
                getAllChainByBrandAndMedalDB: getAllChainByBrandAndMedalDB,
                getAllMedalByBrandDB: getAllMedalByBrandDB,
                getAllRingByBrandAndMedalAndChainDB: getAllRingByBrandAndMedalAndChainDB,
                getAllModelListByBrandAndMedalAndChainAndRingDB: getAllModelListByBrandAndMedalAndChainAndRingDB
            }
        );

        const services = Object.freeze(
            {
                createBrandMedalChainRingPageList
            }
        );

        return services;
    }