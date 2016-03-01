var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { loader: 'babel-loader', test: /\.js$/, include: /src/, exclude: /node_modules/ },
      { loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'), test: /\.css$/, include: /src/, exclude: /node_modules/ },
      { test: /\.(png|jpg)$/, loader: "url-loader" }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', ['/']),
    new ExtractTextPlugin("styles.css", { allChunks: true })
  ]
};