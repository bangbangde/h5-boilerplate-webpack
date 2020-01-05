const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'js/[name].[chunkhash]].js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all'
    }
  }
}