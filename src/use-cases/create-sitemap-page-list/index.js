const buildCreateModelSitemapPage = require('./src/create-model-sitemap-page');
const buildCreateBrandSitemapPages = require('./src/create-brand-sitemap-pages');
const buildCreateBrandMedalSitemapPage = require('./src/create-brand-medal-sitemap-page');
const buildCreateBrandMedalChainSitemapPage = require('./src/create-brand-medal-chain-sitemap-page');
const buildCreateBrandMedalChainRingSitemapPage = require('./src/create-brand-medal-chain-ring-sitemap-page');

const buildCreateSitemapPageList = require('./src/create-sitemap-page-list')
module.exports = function
(
    {
        getAllModelDB,
        saveFile,
        siteMapPageRender,
        modelSitemapPanle,
        getAllBrandDB,
        brandSitemapPanle,
        getAllMedalByBrandDB,
        brandMedalSitemapPanle,
        brandMedalChainSitemapPanle,
        getAllChainByBrandAndMedalDB,
        brandMedalChainRingSitemapPanle,
        getAllRingByBrandAndMedalAndChainDB
    }
)
    {
        const createModelSitemapPage = buildCreateModelSitemapPage(
            {
                getAllModelDB: getAllModelDB,
                saveFile: saveFile,
                siteMapPageRender: siteMapPageRender,
                modelSitemapPanle: modelSitemapPanle
            }
        );

        const createBrandSitemapPages = buildCreateBrandSitemapPages(
            {
                getAllBrandDB: getAllBrandDB,
                saveFile: saveFile,
                siteMapPageRender: siteMapPageRender,
                brandSitemapPanle: brandSitemapPanle
            }
        );

        const createBrandMedalSitemapPage = buildCreateBrandMedalSitemapPage(
            {
                brandMedalSitemapPanle: brandMedalSitemapPanle,
                getAllBrandDB:getAllBrandDB,
                getAllMedalByBrandDB: getAllMedalByBrandDB, 
                saveFile: saveFile,
                siteMapPageRender: siteMapPageRender,
                getAllMedalByBrandDB: getAllMedalByBrandDB,
            }
        );

        const createBrandMedalChainSitemapPage = buildCreateBrandMedalChainSitemapPage(
            {
                brandMedalChainSitemapPanle: brandMedalChainSitemapPanle,
                getAllBrandDB:getAllBrandDB,
                getAllMedalByBrandDB: getAllMedalByBrandDB, 
                saveFile: saveFile,
                siteMapPageRender: siteMapPageRender,
                getAllMedalByBrandDB: getAllMedalByBrandDB,
                getAllChainByBrandAndMedalDB: getAllChainByBrandAndMedalDB
            }
        );

        
        const createBrandMedalChainRingSitemapPage = buildCreateBrandMedalChainRingSitemapPage(
            {
                brandMedalChainSitemapPanle: brandMedalChainSitemapPanle,
                getAllBrandDB:getAllBrandDB,
                getAllMedalByBrandDB: getAllMedalByBrandDB, 
                saveFile: saveFile,
                siteMapPageRender: siteMapPageRender,
                getAllMedalByBrandDB: getAllMedalByBrandDB,
                getAllChainByBrandAndMedalDB: getAllChainByBrandAndMedalDB,
                brandMedalChainRingSitemapPanle: brandMedalChainRingSitemapPanle,
                getAllRingByBrandAndMedalAndChainDB: getAllRingByBrandAndMedalAndChainDB
            }
        );

        const createSitemapPageList = buildCreateSitemapPageList(
            {
                createModelSitemapPage: createModelSitemapPage,
                createBrandSitemapPages: createBrandSitemapPages,
                createBrandMedalSitemapPage: createBrandMedalSitemapPage,
                createBrandMedalChainSitemapPage: createBrandMedalChainSitemapPage,
                createBrandMedalChainRingSitemapPage: createBrandMedalChainRingSitemapPage
            }
        )

        const services = Object.freeze(
            {
                createSitemapPageList: createSitemapPageList
            }
        );

        return services;
    }