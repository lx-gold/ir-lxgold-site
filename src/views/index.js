module.exports = function
(
    {
        headTag,
        modelPanelRender,
        modelBrandPanelRender,
        modelBrandMedalPanelRender,
        modelBrandMedalChainPanelRender,
        modelBrandMedalChainRingPanelRender,
        modelDetailRender,
        modelDescriptionRender,
        minifyCss,
        modelLdJson,
        modelWebPageLdJson,
        siteMapListRender
    }
)
    {

        const indexViews = require('./index-pages')(
            {
                headTag: headTag,
                modelPanelRender: modelPanelRender,
                minifyCss: minifyCss
            }
        );

        


        const brandModelListPage = require('./brand-model-list')(
            {
                headTag: headTag,
                modelBrandPanelRender: modelBrandPanelRender,
                minifyCss: minifyCss
            }
        );


        const brandMedalModelListPage = require('./brand-medal-model-list')(
            {
                headTag: headTag,
                modelBrandMedalPanelRender: modelBrandMedalPanelRender,
                minifyCss: minifyCss
            }
        )

        const brandMedalChainModelListPage = require('./brand-medal-chain-model-list')(
            {
                headTag: headTag,
                modelBrandMedalChainPanelRender: modelBrandMedalChainPanelRender,
                minifyCss: minifyCss
            }
        );

        const brandMedalChainRingModelListPage = require('./brand-medal-chain-ring-model-list')(
            {
                headTag: headTag,
                modelBrandMedalChainRingPanelRender: modelBrandMedalChainRingPanelRender,
                minifyCss: minifyCss
            }
        );

        const modelDetailViews = require('./model-detail')(
            {
                headTag: headTag,
                modelDetailRender: modelDetailRender,
                modelDescriptionRender: modelDescriptionRender,
                minifyCss: minifyCss,
                modelLdJson: modelLdJson,
                modelWebPageLdJson: modelWebPageLdJson
            }
        )

        const {siteMapPage} = require('./site-map')();

        const services = Object.freeze(
            {
                index: indexViews,
                brandModelList: brandModelListPage,
                brandMedalModelList: brandMedalModelListPage,
                brandMedalChainModelList: brandMedalChainModelListPage,
                brandMedalChainRingModelList: brandMedalChainRingModelListPage,
                modelDetail: modelDetailViews,
                siteMap: siteMapPage
            }
        );

        return services;
    }