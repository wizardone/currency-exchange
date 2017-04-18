let path = require('path');

module.exports = {
  entry: {
    main: './index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'lib')
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
      }
    ]
  },
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


