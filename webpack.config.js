var path = require("path")
var webpack = require("webpack")

module.exports = {
  entry:[
    __dirname + "/src/js/main.js"
  ],
  output: {
    path: __dirname + "/dist",
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
        include: path.resolve(__dirname, "/src/js/")
      },
      {
        test: /\.js$/,
        loader: "eslint-loader",
        enforce: "pre",
        include: path.resolve(__dirname, "/src/js/"),
        options: {
          formatter: require("eslint-friendly-formatter")
        }
      }
    ]
  }
}