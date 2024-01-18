const fs = require('fs');
const minify = require('html-minifier').minify;

const WWW_PATH = './www';
const STYLE_PATH = '/statics/style';



const buildMinifyCss = require('./minify-css');
const buildCopyStaticFolder = require('./copy-static-folder');
const buildCreateManifest = require('./create-manifest');

module.exports = function
()
    {
        const dataAccess = require('../data-access')();

        const components = require('../components')(
            {
                cssPath: STYLE_PATH
            }
        );

        const minifyCss = buildMinifyCss(
            {
                STYLE_PATH: `.${STYLE_PATH}`,
                fs: fs,
                minify: minify
            }
        );

        const  viewServices  = require('../views')(
            {
                modelPanelRender: components.model.modelPanel,
                modelBrandPanelRender: components.model.modelBrandPanel,
                modelBrandMedalPanelRender: components.model.modelBrandMedalPanel,
                modelBrandMedalChainPanelRender: components.model.modelBrandMedalChainPanel,
                modelBrandMedalChainRingPanelRender: components.model.modelBrandMedalChainRingPanel,
                modelDetailRender: components.model.modelDetail,
                headTag: components.share.headTag,
                minifyCss: minifyCss,
                modelLdJson: components.model.modelProductLdJson,
                modelWebPageLdJson: components.model.modelWebPageLdJson,
                modelDescriptionRender: components.model.modelDescription,
                siteMapListRender: components.share.siteMap,
                header: components.share.header
            }
        );
        

        const { saveFile } = require('./save-file')(
            {
                fs: fs,
                minify: minify,
                STORAGE_PATH: WWW_PATH,
            }
        );

        const { createIndexPage } = require('./create-index-page')(
            {
                indexPagesViews: viewServices.index,
                saveFile: saveFile,
                modelList: dataAccess.json.model.getAllModel(),
                brandList: dataAccess.json.brand.getAllBrand()
            }
        );
        
        const {createBrandPageList} = require('./create-brand-page-list')(
            {
                brandModelListPageRender: viewServices.brandModelList,
                getAllModelListByBrandDB: dataAccess.json.model.getAllModelByBrand,
                getAllBrandDB: dataAccess.json.brand.getAllBrand,
                saveFile: saveFile,
                getAllMedalByBrandDB: dataAccess.json.medal.getAllMedalByBrand
            }
        );


        const { createBrandMedalPageList } = require('./create-brand-medal-page-list')(
            {
                brandMedalModelListPageRender: viewServices.brandMedalModelList,
                getAllBrandDB: dataAccess.json.brand.getAllBrand,
                getAllMedalByBrandDB: dataAccess.json.medal.getAllMedalByBrand,
                getAllModelListByBrandAndMedalDB: dataAccess.json.model.getAllModelByBrandAndMedal,
                saveFile: saveFile,
                getAllChainByBrandAndMedalDB: dataAccess.json.chain.getAllChainByBrandAndMedal
            }
        );

        const { createBrandMedalChainPageList } = require('./create-brand-medal-chain-page-list')(
            {
                brandMedalChainModelListPageRender: viewServices.brandMedalChainModelList,
                getAllBrandDB: dataAccess.json.brand.getAllBrand,
                getAllChainByBrandAndMedalDB: dataAccess.json.chain.getAllChainByBrandAndMedal,
                getAllMedalByBrandDB: dataAccess.json.medal.getAllMedalByBrand,
                getAllRingByBrandAndMedalChainDB: dataAccess.json.ring.getAllRingByBrandAndMedalAndChain,
                getAllModelListByBrandAndMedalAndChainDB: dataAccess.json.model.getAllModelByBrandAndMedalAndChain,
                saveFile:saveFile
            }
        );

        const { createBrandMedalChainRingPageList } = require('./create-brand-medal-chain-ring-page-list')(
            {
                brandMedalChainRingModelListPageRender: viewServices.brandMedalChainRingModelList,
                getAllBrandDB: dataAccess.json.brand.getAllBrand,
                saveFile: saveFile,
                getAllMedalByBrandDB : dataAccess.json.medal.getAllMedalByBrand,
                getAllChainByBrandAndMedalDB: dataAccess.json.chain.getAllChainByBrandAndMedal,
                getAllRingByBrandAndMedalAndChainDB: dataAccess.json.ring.getAllRingByBrandAndMedalAndChain,
                getAllModelListByBrandAndMedalAndChainAndRingDB: dataAccess.json.model.getAllModelByBrandAndMedalAndChainAndRing,
            }
        )

        const { createModelPageList } = require('./create-model-page-list')(
            {
                getAllModelDB: dataAccess.json.model.getAllModel,
                modelPageRender: viewServices.modelDetail,
                saveFile: saveFile,
            }
        )


        const copyStaticFolder = buildCopyStaticFolder(
            {
                fs:fs
            }
        );

        // const createSiteMap = buildCreateSiteMap(
        //     {
        //         getAllBrandDB: dataAccess.json.brand.getAllBrand,
        //         saveFile: saveFile,
        //         sitemapPageRender: viewServices.siteMap
        //     }
        // );

        const { createSitemapPageList } = require('./create-sitemap-page-list')(
            {
                getAllModelDB: dataAccess.json.model.getAllModel,
                modelSitemapPanle: components.share.siteMap.modelSitemapPanle,
                saveFile: saveFile,
                siteMapPageRender: viewServices.siteMap,
                getAllBrandDB: dataAccess.json.brand.getAllBrand,
                brandSitemapPanle: components.share.siteMap.brandSitemapPanle,
                brandMedalSitemapPanle: components.share.siteMap.brandMedalSitemapPanle,
                getAllMedalByBrandDB: dataAccess.json.medal.getAllMedalByBrand,
                brandMedalChainSitemapPanle: components.share.siteMap.brandMedalChainSitemapPanle,
                getAllChainByBrandAndMedalDB: dataAccess.json.chain.getAllChainByBrandAndMedal,
                brandMedalChainRingSitemapPanle: components.share.siteMap.brandMedalChainRingSitemapPanle,
                getAllRingByBrandAndMedalAndChainDB: dataAccess.json.ring.getAllRingByBrandAndMedalAndChain
            }
        )

        const createManifest = buildCreateManifest(
            {
                saveFile: saveFile,
            }
        )

        const services = Object.freeze(
            {
                createIndexPage,
                createBrandPageList,
                createBrandMedalPageList,
                createBrandMedalChainPageList,
                createBrandMedalChainRingPageList,
                createModelPageList,
                copyStaticFolder,
                minifyCss,
                createSitemapPageList,
                createManifest
            }
        );

        return services;
    }