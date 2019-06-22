const path = require('path')

module.exports = {
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
    ]
  },
  resolve: {
    modules: [
      path.resolve(process.cwd(), 'src'),
      'node_modules'
    ]
  }
}
