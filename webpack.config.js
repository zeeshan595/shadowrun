const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const options = {
  sourcePath: path.resolve(__dirname, "src"),
  buildPath: path.resolve(__dirname, "dist"),
  nodeModulesPath: path.resolve(__dirname, "node_modules"),
  htmlTemplate: path.resolve(__dirname, "public", "index.html")
};

module.exports = {
  entry: "entry.tsx",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-typescript",
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-export-default-from",
            "@babel/plugin-proposal-class-properties"
          ]
        },
        exclude: [options.nodeModulesPath]
      },
      {
        test: /.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ],
        exclude: [options.nodeModulesPath]
      },
      {
        test: /.svg/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      options.sourcePath
    ],
    extensions: [".js", ".ts", ".tsx", ".scss"]
  },
  output: {
    path: options.buildPath,
    filename: "bundle.js"
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: options.htmlTemplate
    })
  ]
}