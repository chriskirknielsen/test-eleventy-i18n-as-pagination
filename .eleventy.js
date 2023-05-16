const { EleventyI18nPlugin } = require('@11ty/eleventy');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: 'en',
		errorMode: 'allow-fallback',
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
