const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
        // For production
        filename: "[name].css",
        chuckFilename: "[id].css"
    }),
    new FaviconsWebpackPlugin('./src/images/icon.png') 
    ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
            {
                loader: "html-loader",
                options: {minimize: true}
            }
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(svg|gif|png|jpg)$/,
        use: 'file-loader'
      }
    ]
  }
};

module.exports = config;