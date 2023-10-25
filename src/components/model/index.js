const buildModelProductLdJson = require('./ldJson/model-product-ldJson');
const buildModelWebPageLdJson = require('./ldJson/model-web-page-ldJson');
const buileModelDetail = require('./detail/model-detail')
const buildModelDescription = require('./description/model-description');

module.exports = function
(
    {
        selectBrand,
        selectChain,
        selectMedal,
        selectRing,
        webPageLdJson
    }
)
    {
        const goToModelDetail = require('./go-to-model-detail')();

        const modelDescription = buildModelDescription();

        const modelListItem = require('./list-item')(
            {
                goToModelDetail: goToModelDetail
            }
        )

        const modelList = require('./list')(
            {
                modelListItemRender: modelListItem
            }
        )

        const modelPanel = require('./panel')(
            {
                modelListRender:modelList,
                selectBrandRender:selectBrand
            }
        );

        const modelBrandPanel = require('./brand-panel')(
            {
                modelListRender: modelList,
                selectBrandRender: selectBrand,
                selectMedalRender: selectMedal,
            }
        );

        const modelBrandMedalPanel = require('./brand-medal-panel')(
            {
                modelListRender: modelList,
                selectBrandRender: selectBrand,
                selectMedalRender: selectMedal,
                selectChainRender: selectChain

            }
        );


        const modelBrandMedalChainPanel = require('./brand-medal-chain-panel')(
            {
                modelListRender: modelList,
                selectBrandRender: selectBrand,
                selectMedalRender: selectMedal,
                selectChainRender: selectChain,
                selectRingRender: selectRing

            }
        );

        const modelBrandMedalChainRingPanel = require('./brand-medal-chain-ring-panel')(
            {
                modelListRender: modelList,
                selectBrandRender: selectBrand,
                selectMedalRender: selectMedal,
                selectChainRender: selectChain,
                selectRingRender: selectRing
            }
        );

        const modelDetail = buileModelDetail();

        const modelProductLdJson = buildModelProductLdJson();

        const modelWebPageLdJson = buildModelWebPageLdJson(
            {
                webPageLdJson: webPageLdJson
            }
        );

        const services = Object.freeze(
            {
                modelPanel,
                modelBrandPanel,
                modelBrandMedalPanel,
                modelBrandMedalChainPanel,
                modelBrandMedalChainRingPanel,
                modelDetail,
                modelProductLdJson,
                modelWebPageLdJson,
                modelDescription

            }
        );

        return services;

    }