module.exports = {
  plugins: [
    require("postcss-import-ext-glob"),
    require("postcss-import"),
    require("postcss-custom-media"),
    require("postcss-custom-properties"),
    require("autoprefixer"),
    require("cssnano"),
  ],
};
