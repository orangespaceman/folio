const webpack = require("webpack");
const comment = require("./src/_js/comment");

module.exports = {
  entry: {
    "assets/js/site": "./src/_js/site.js",
    "service-worker": "./src/_js/service-worker.js"
  },
  output: {
    path: `${__dirname}/src`,
    filename: "[name].js"
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
};
