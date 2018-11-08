const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// const webpack = require('webpack');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

const dotenvPlugin =  new Dotenv({
  path: './.env', // load this now instead of the ones in '.env'
  safe: false, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
  systemvars: false, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
  silent: false // hide any errors
});

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
      },
    ]
  },
  plugins: [
    htmlPlugin,
    dotenvPlugin
  ]
};
