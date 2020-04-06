'use strict';
const assert = require('assert');

class ResourceListWebpackPlugin {
  constructor (options) {
    assert.equal(options, undefined, 'The ResourceListWebpackPlugin does not accept any options');
  }

  apply (compiler) {
    // Hook into the html-webpack-plugin processing
    if (compiler.hooks) {
      // Webpack 4+ Plugin System
      compiler.hooks.compilation.tap('ResourceListWebpackPlugin', compilation => {
        if (compilation.hooks.htmlWebpackPluginAlterAssetTags) {
          compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync('ResourceListWebpackPluginAlterAssetTags',
            function (htmlPluginData, callback) {
              console.log(htmlPluginData)
              callback()
            }
          );
        }
      });
    } else {
      // Webpack 1-3 Plugin System
      compiler.plugin('compilation', compilation => {
        compilation.plugin('html-webpack-plugin-alter-asset-tags',
          function (htmlPluginData, callback) {
            console.log(htmlPluginData)
            callback()
          }
        );
      });
    }
  }
}

module.exports = ResourceListWebpackPlugin;
