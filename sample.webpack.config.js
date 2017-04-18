let path = require('path');
let CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './sample/demo.js'
  },
  output: {
    filename: 'demo-bundle.js',
    path: path.resolve(__dirname, 'sample')
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
  plugins: [
    new CopyWebpackPlugin([
      { from: 'static/images/**' }
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, "sample"),
    publicPath: path.join(__dirname, "sample"),
    port: 9000,
    compress: true,
    hot: true
  }
}



