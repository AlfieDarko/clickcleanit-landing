const withCSS = require("@zeit/next-css");
const path = require("path");

module.exports = withCSS({
  target: "serverless",
  webpack(config) {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["lib"] = path.join(__dirname, "lib");
    config.resolve.alias["actions"] = path.join(__dirname, "actions");
    config.resolve.alias["reducers"] = path.join(__dirname, "reducers");
    config.resolve.alias["selectors"] = path.join(__dirname, "selectors");

    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 8192,
          publicPath: "/_next/static/",
          outputPath: "static/",
          name: "[name].[ext]"
        }
      }
    });
    return config;
  }
});
