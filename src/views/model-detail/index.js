const buildModelDetailHtmlPage = require('./src/model-detail-html');
const buildModelDetailAmpPage = require('./src/model-detail-amp');

module.exports = function
(
    {
        headTag,
        modelDetailRender,
        modelDescriptionRender,
        minifyCss,
        modelLdJson,
        modelWebPageLdJson
    }
)
    {
        const modelDetailHtmlPage = buildModelDetailHtmlPage(
            {
                headTag: headTag.html,
                modelDetailHtmlRender: modelDetailRender,
                modelDescriptionHtmlRender: modelDescriptionRender,
                modelLdJson: modelLdJson,
                modelWebPageLdJson: modelWebPageLdJson
            }
        );

        const modelDetailAmpPage = buildModelDetailAmpPage(
            {
                headAmpTag: headTag.amp,
                modelDetailAmpRender: modelDetailRender,
                modelDescriptionAmpRender: modelDetailRender,
                minifyCss: minifyCss
            }
        )

        const services = Object.freeze(
            {
                html: modelDetailHtmlPage,
                amp: modelDetailAmpPage
            }
        );

        return services;
    }