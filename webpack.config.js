const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    // port: 8080,
    // open: true,
    hot: false,
    // https: true,
    // writeToDisk: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     secure: false
    //   }
    // }
  },
  entry: './src/javascripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        //样式
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        //图片
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        //字体
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
};