let path = require('path');

module.exports = {
  entry: {
    main: './index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'currency_exchange_board',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.jpg$/, loader: 'url-loader' }
    ]
  },
  plugins: [],
  externals: {
    'react': 'react',
    'react-dom': 'reactDOM'
  },
  devServer: {
    port: 9000,
    compress: true,
    hot: true
  }
}


