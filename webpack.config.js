const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const comment = require("./src/_js/comment");

module.exports = {
  mode: "production",
  entry: {
    "assets/js/site": "./src/_js/site.js",
    "service-worker": "./src/_js/service-worker.js",
  },
  output: {
    path: `${__dirname}/src`,
    filename: "[name].js",
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [new webpack.BannerPlugin(comment)],
};
