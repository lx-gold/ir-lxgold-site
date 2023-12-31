const buildIndexGenerator = require('./src/indexPage');
const buildIndexAmpGenerator = require('./src/indexAmpPage');

module.exports = function
(
    {
        headTag,
        modelPanelRender,
        minifyCss,
        header
    }
)
    {
        const indexHtmlGenerator = buildIndexGenerator(
            {
                headTag: headTag.html,
                modelPanelRender:modelPanelRender.html,
                headerHtml: header.html
            }
        );

        const indexAmpGenerator = buildIndexAmpGenerator(
            {
                headAmpTag: headTag.amp,
                modelPanelRender:modelPanelRender.amp,
                minifyCss: minifyCss,
                headerAmp: header.amp
            }
        )

        const services = Object.freeze(
            {
                html: indexHtmlGenerator,
                amp:indexAmpGenerator
            }
        );

        return services;
    }