const buildHeadCssTag = require('./src/head-css-tag');
const buildGenerateDescription = require('./src/generate-description');
const buildHeadTitleTag = require('./src/head-title-tag');
const buildHeadDescriptionTag = require('./src/head-description-tag');
const buildHeadKeywordsTag = require('./src/head-keywords-tag');
const buildHeadCanonicalTag = require('./src/head-canonical-tag');
const buildHeadAmphtmlTag = require('./src/head-amphtml-tag');
const buildHeadIconSetTagList = require('./src/head-icon-set-tag-list');
const buildHeadOgTagList = require('./src/head-og-tag-list');

const buildHeadTag = require('./src/head-tag');
const buildHeadAmpTag = require('./src/head-amp-tag');

module.exports = function
(
    {
        cssPath
    }
)
    {
        const headCssTag = buildHeadCssTag(
            {
                cssPath: cssPath
            }
        );

        const generateDescription = buildGenerateDescription();

        const headTitleTag = buildHeadTitleTag();

        const headDescriptionTag = buildHeadDescriptionTag();

        const headKeywordsTag = buildHeadKeywordsTag();

        const headCanonicalTag = buildHeadCanonicalTag();

        const headAmphtmlTag = buildHeadAmphtmlTag();

        const headIconSetTagList = buildHeadIconSetTagList();

        const headOgTagList = buildHeadOgTagList();

        const headTag = buildHeadTag(
            {
                headCssTag: headCssTag,
                headTitleTag: headTitleTag,
                generateDescription: generateDescription,
                headDescriptionTag: headDescriptionTag,
                headKeywordsTag: headKeywordsTag,
                headCanonicalTag: headCanonicalTag,
                headAmphtmlTag: headAmphtmlTag,
                headIconSetTagList: headIconSetTagList,
                headOgTagList: headOgTagList
            }
        );

        const headAmpTag = buildHeadAmpTag(
            {
                headTitleTag: headTitleTag,
                generateDescription: generateDescription,
                headDescriptionTag: headDescriptionTag,
                headKeywordsTag: headKeywordsTag,
                headCanonicalTag: headCanonicalTag,
                headIconSetTagList: headIconSetTagList,
            }
        );

        

        const services = Object.freeze(
            {
                html: headTag,
                amp: headAmpTag
            }
        );

        return services;
    }