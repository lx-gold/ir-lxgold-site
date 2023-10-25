
module.exports = function
(
    {
        cssPath
    }
)
    {
        const brandComponents = require('./brand')();

        const medalComponents = require('./medal')();

        const chainComponents = require('./chain')();

        const ringComponents = require('./ring')();

        const shareComponents = require('./share')(
            {
                cssPath: cssPath
            }
        )


        const modelComponents = require('./model')(
            {
                selectBrand: brandComponents.selectBrand,
                selectChain: chainComponents.selectChain,
                selectMedal: medalComponents.selectMedal,
                selectRing: ringComponents.selectRing,
                webPageLdJson: shareComponents.ldJson.webPage
            }
        );

        const services = Object.freeze(
            {
                model: modelComponents,
                chain: chainComponents,
                brand: brandComponents,
                ring: ringComponents,
                share: shareComponents
            }
        );

        return services;
    }