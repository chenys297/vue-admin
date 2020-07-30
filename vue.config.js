// const package = require("./package.json");

module.exports = {
//   publish: "./",
//   outputDir: `dist/${new Date()
//     .toLocaleString("en-GB")
//     .split(", ")[0]
//     .split("/")
//     .reverse()
//     .join("")}/V${package.version}`,
  devServer: {
    historyApiFallback: true
  }
}
