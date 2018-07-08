const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, 'src/html/index.html'),
  filename: './index.html'
});

module.exports = {
  entry: path.join(__dirname, 'src/js/index.jsx'),
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
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
        use: ['url-loader']
      }
    ]
  },
  plugins: [htmlPlugin],
  devServer: {
      port: 3000
  }
};