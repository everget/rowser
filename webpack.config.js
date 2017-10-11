'use strict';

const path= require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const pkg = require('./package.json');

module.exports = env => {
  const ENV = (env && env.NODE_ENV) || 'development';
  console.log('NODE_ENV: ', ENV);

  const isDev = ENV === 'development';
  const isProd = ENV === 'production';

  const BANNER = `Rowser v${pkg.version}\nCopyright 2017-present Alex Orekhov (@everget). MIT License.`;
  const DEV_SERVER_PORT = 8080;

  const config = {
    entry: './src/index.js',
    output: {
      filename: isDev ? 'rowser.bundle.js' : 'rowser.bundle.[hash].js',
      path: path.join(__dirname, 'static'),
      publicPath: '/static/',
    },
    plugins: [
      new webpack.BannerPlugin(BANNER),
      new CleanWebpackPlugin(['static']),
      new HtmlWebpackPlugin({
        filename: path.join(__dirname, 'index.html'),
        template: path.join(__dirname, 'src/index.html'),
        title: 'Rowser - Index',
      }),
      new ExtractTextWebpackPlugin({
        filename: isDev ? 'rowser.bundle.css' : 'rowser.bundle.[hash].css',
        allChunks: false,
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            path.join(__dirname, 'src/index.js'),
            path.join(__dirname, 'lib')
          ],
          loader: 'babel-loader',
          options: {
            babelrc: false,
            cacheDirectory: true,
            presets: ['es2015'], // ['es2015', { 'modules': false }]
            plugins: ['transform-runtime'],
          }
        },
        {
          test: /\.css$/,
          use: ExtractTextWebpackPlugin.extract({
            fallback: 'style-loader',
            use: [{
              loader: 'css-loader',
              options: {
                minimize: isProd,
              }
            }],
          })
        }
      ]
    }
  };

  if (isDev) {
    merge(config, {
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
      devtool: 'inline-source-map',
      devServer: {
        contentBase: './static',
        compress: true,
        hot: true,
        inline: true,
        port: DEV_SERVER_PORT,
        publicPath: '/static/',
        watchOptions: {
          ignored: /node_modules/
        },
      },
    });
  } else if (isProd) {
    merge(config, {
      plugins: [
        new UglifyJSPlugin({
          cache: true,
          ecma: 6,
          sourceMap: true,
        })
      ]
    });
  }

  return config;
};
