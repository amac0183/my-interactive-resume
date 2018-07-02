const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, 'src/index.html'),
  filename: './index.html'
});

module.exports = {
  entry: path.join(__dirname, 'src/js/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [htmlPlugin],
  devServer: {
      port: 3000
  }
};