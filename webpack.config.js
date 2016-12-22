const webpack = require('webpack')
const comment = require('./src/_js/comment')

module.exports = {
  entry: './src/_js/site.js',
  output: {
    filename: './src/assets/js/site.js'
  },
  plugins: [
    new webpack.BannerPlugin(comment),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
