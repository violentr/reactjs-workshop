const path = require('path')

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(process.cwd(), 'public'),
    historyApiFallback: true
  },
  entry: 'index.js',
  output: {
    path: path.resolve(process.cwd(), 'public', 'assets'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [
          path.resolve(process.cwd(), 'src')
        ],
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader', options: {sourceMap: true}},
          {loader: 'css-loader', options: {sourceMap: true}}
        ],
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(process.cwd(), 'src'),
      'node_modules'
    ]
  }
}
