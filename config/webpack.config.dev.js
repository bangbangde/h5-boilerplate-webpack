const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/, use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']
      },
    ]
  },
  devServer: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ]
}