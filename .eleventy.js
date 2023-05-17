const { EleventyI18nPlugin } = require('@11ty/eleventy');
const defaultLanguage = 'en';

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: defaultLanguage,
		errorMode: 'allow-fallback',
	});
	eleventyConfig.addFilter('toLocaleUrl', function (baseSlug) {
		const locale = this?.ctx?.locale || this?.ctx?.page?.lang || defaultLanguage;
		const data = this.ctx[baseSlug][locale];
		const localisedSlug = data.slug;
		return `/${locale}/${localisedSlug}`;
	});

	return {
		pathPrefix: '/',
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dir: {
			includes: '_includes',
			input: 'src',
			output: '_site',
		},
	};
};
