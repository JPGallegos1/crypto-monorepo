/**
 * @description: this config was required to perform the CoinChart.tsx component on both platform.
 * See: https://formidable.com/open-source/victory/docs/faq/#expo-web-apps-that-use-victory-native
 */

const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv)

  config.module.rules.push({
    test: /.*victory-native\/.*\.js/,
    use: {
      loader: 'babel-loader',
    },
  })

  return config
}
