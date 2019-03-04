const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
            // fallback to style-loader in development
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader'
            }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.jpg$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
    })
  ]
});
