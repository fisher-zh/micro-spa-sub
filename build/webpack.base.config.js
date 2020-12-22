const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
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
        test: /\.js$/,
        include: path.join(__dirname, "../src"),
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(vue|(j|t)sx?)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // cache: true,
          eslintPath: require.resolve('eslint'),
          extensions: ['js', 'vue', 'jsx'],
          formatter: require('eslint-friendly-formatter'),
        },
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
        messages: ['You application is running here http://localhost:' + config.dev.port],
        clearConsole: true
      },
    }),
    new VueLoaderPlugin()
  ]
}
