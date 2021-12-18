const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var webpack = require('webpack')

//global variables
//const rootPath = path.resolve(__dirname);
//const distPath = rootPath + "/src";

// webpack
module.exports = {
  //mode
  mode: 'development',
  //entry
  entry: '/src/index.js',
  //performance & size
  performance: {
    hints: false,
  },
  //output
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    publicPath: 'auto',
  },
  //webpack serve
  devtool: false, //'inline-source-map',
  stats: 'none',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    open: true,
    hot: true,
  },
  //loaders
  module: {
    rules: [
      //css
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      //all images
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
        },
        dependency: { not: ['url'] },
        type: 'asset/resource',
      },
      //js for babel
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
      //html
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader',
      },
    ],
  },
  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),
  ],
}
