/** @type {import('next').NextConfig} */
require('dotenv').config()

console.log(process.env.API_URL)

const nextConfig = {
	output: 'standalone',
	// images: {
	// 	domains: [process.env.APP_DOMAIN],
	// },
	env: {
		API_URL: process.env.API_URL,
		API_TOKEN: process.env.API_TOKEN,
		// APP_DOMAIN: process.env.APP_DOMAIN,
	},
}

module.exports = nextConfig
