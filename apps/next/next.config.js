/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   webpack5: true,
// }

// const { withExpo } = require('@expo/next-adapter')
// const withFonts = require('next-fonts')
// const withImages = require('next-images')
// const withPlugins = require('next-compose-plugins')
// const withTM = require('next-transpile-modules')([
//   'solito',
//   'dripsy',
//   '@dripsy/core',
//   'moti',
//   '@motify/core',
//   '@motify/components',
//   'app',
// ])

// module.exports = withPlugins(
//   [withTM, withFonts, withImages, [withExpo, { projectRoot: __dirname }]],
//   nextConfig
// )

const { withNativebase } = require('@native-base/next-adapter')

module.exports = withNativebase({
  dependencies: [
    '@expo/next-adapter',
    'react-native-vector-icons',
    'react-native-vector-icons-for-web',
    'solito',
    'app',
    'http',
  ],
  nextConfig: {
    projectRoot: __dirname,
    reactStrictMode: true,
    webpack5: true,
    images: {
      disableStaticImages: true,
    },
    webpack: (config, options) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'react-native$': 'react-native-web',
        '@expo/vector-icons': 'react-native-vector-icons',
        'victory-native': 'victory',
      }
      ;(config.resolve.extensions = [
        '.web.js',
        '.web.ts',
        '.web.tsx',
        ...config.resolve.extensions,
      ]),
        config.module.rules.push({
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        })
      return config
    },
  },
})
