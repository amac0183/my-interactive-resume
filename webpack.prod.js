const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
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
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'linaria/loader'
          }
        ]
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
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
});
