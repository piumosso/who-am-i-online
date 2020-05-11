const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    bundle: './app/index.js'
  },
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'production', // development
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new ManifestPlugin({
      fileName: '../manifest.json'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'
    }),
  ]
};
