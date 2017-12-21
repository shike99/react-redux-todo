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
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
