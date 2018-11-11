const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/styles/variables.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, "dist"),
        routes: [
          "/",
          "/arrangementer",
          "/forskning",
          "/testkits",
          "/testkits-og-rusvett", // Old site
          "/testkits/hvordan-bruke",
          "/medlem",
          "/media",
          "/om-oss",
          "/faq"
        ]
      })
    ]
  }
};
