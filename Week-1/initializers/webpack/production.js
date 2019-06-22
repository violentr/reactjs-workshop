const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(process.cwd(), 'public'),
    publicPath: '/',
    filename: 'assets/[name].[hash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: 'production'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]

})
