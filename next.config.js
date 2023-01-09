const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (cfg) => {
		cfg.module.rules.push({
			test: /\.md$/,
			loader: "frontmatter-markdown-loader",
			options: { mode: ["react-component"] },
		});
		return cfg;
	},
};

module.exports = withPlugins([
	[
		optimizedImages,
		{
			/* config for next-optimized-images */
		},
	],

	nextConfig,
]);
