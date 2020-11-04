const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const config = require('../config');

module.exports = {
  entry: path.join(__dirname, '../src/main.js'),
  output: {
    filename: 'js/[name].[hash].js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        options: {
          symbolId: "icon-[name]"
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000000,
          // 图片导出路径
          outputPath: 'images/'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'video/'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'font/'
        }
      }
    ]
  },
  // 在配置中添加插件
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:' + config.dev.port]
      },
    }),
    new VueLoaderPlugin(),
    new ESLintPlugin({
      context: path.join(__dirname, '../src'),
      eslintPath: require.resolve('eslint'),
      extensions: ['js', 'vue'],
      formatter: require('eslint-friendly-formatter'),
      useEslintrc: true,
      ignore: true
    })
  ]
}
