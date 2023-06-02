const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'scripts/main.js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader'
          },
        ],
      },
      {
        test: /\.(png|jpe?g)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'images/[name].[ext]'
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './styles/main.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
    }),
    new CleanWebpackPlugin(),
  ]
}
