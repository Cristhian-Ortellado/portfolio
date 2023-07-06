/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    path: 'https://cristhian-ortellado.github.io/portfolio/public/',
  },
}

module.exports = nextConfig
