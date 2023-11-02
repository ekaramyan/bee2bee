const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: false,
})

require('dotenv').config()

console.log(process.env.CAPTCHA_KEY)

const nextConfig = {
	output: 'standalone',
	images: {
		domains: [process.env.API_URL.slice(0, -4)],
	},
	env: {
		API_URL: process.env.API_URL,
		API_TOKEN: process.env.API_TOKEN,
		CAPTCHA_KEY: process.env.CAPTCHA_KEY,
		// APP_DOMAIN: process.env.APP_DOMAIN,
	},
}

module.exports = withBundleAnalyzer(nextConfig)
