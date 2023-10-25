
const buildSitemapItem = require('./src/sitemap-item');
const buildSiteMapList = require('./src/sitemap-list');

const buildModelSitemapPanle = require('./src/model-sitemap-panel');
const buildBrandSitemapPanle = require('./src/brand-sitemap-panel');
const buildBrandMedalSitemapPanle  = require('./src/brand-medal-sitemap-panel');
const buildBrandMedalChainSitemapPanle = require('./src/brand-medal-chain-sitemap-panel');
const buildBrandMedalChainRingSitemapPanle = require('./src/brand-medal-chain-ring-sitemap-panel');

module.exports = function
()
    {

        const sitemapItem = buildSitemapItem();
        const siteMapList = buildSiteMapList(
            {
                sitemapItemRender: sitemapItem
            }
        );

        const modelSitemapPanle = buildModelSitemapPanle(
            {
                siteMapListRender: siteMapList
            }
        )

        const brandSitemapPanle = buildBrandSitemapPanle(
            {
                siteMapListRender:siteMapList
            }
        )

        const brandMedalSitemapPanle = buildBrandMedalSitemapPanle(
            {
                siteMapListRender:siteMapList
            }
        );

        const brandMedalChainSitemapPanle = buildBrandMedalChainSitemapPanle(
            {
                siteMapListRender:siteMapList
            }
        );

        
        const brandMedalChainRingSitemapPanle = buildBrandMedalChainRingSitemapPanle(
            {
                siteMapListRender:siteMapList
            }
        );

        const services = Object.freeze(
            {
                siteMapList,
                modelSitemapPanle,
                brandSitemapPanle,
                brandMedalSitemapPanle,
                brandMedalChainSitemapPanle,
                brandMedalChainRingSitemapPanle
            }
        );

        return services;
    }