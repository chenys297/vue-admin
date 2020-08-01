const packageConfig = require('./package.json')

module.exports = {
  publicPath: './',
  outputDir: `dist/${new Date()
    .toLocaleString('en-GB')
    .split(', ')[0]
    .split('/')
    .reverse()
    .join('')}/V${packageConfig.version}`,
  devServer: {
    historyApiFallback: true
  },
  productionSourceMap: false,
  css: {
    sourceMap: process.env.NODE_ENV === 'development'
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool = 'source-map'
    }
  }
}
