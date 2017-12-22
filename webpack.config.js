const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './build/',
    port: 8080,
    inline: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}],
                'react'
              ]
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
