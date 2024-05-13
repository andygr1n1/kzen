/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        optimizePackageImports: ['lodash-es'],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard',
                permanent: true, // Set to true if the redirect should be permanent (HTTP 301)
            },
        ]
    },
}

export default nextConfig
