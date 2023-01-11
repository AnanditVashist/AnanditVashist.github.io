/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	webpack: (cfg) => {
		cfg.module.rules.push(
			{
				test: /\.md$/,
				loader: "frontmatter-markdown-loader",
				options: { mode: ["react-component"] },
			},
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ["@svgr/webpack"],
			}
		);
		return cfg;
	},
};
module.exports = nextConfig;
