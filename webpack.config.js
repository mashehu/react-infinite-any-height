const HtmlWebPackPlugin = require("html-webpack-plugin")

const mainFile = "InfiniteAnyHeight.jsx"

module.exports = {
  entry: {
    main: __dirname + "/src/" + mainFile,
  },

  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
    library: mainFile.substring (0, mainFile.indexOf(".")),
    libraryTarget: "umd",
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          }
        ]
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    })
  ],
}
