'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
// Template for index.html
    index: path.resolve(__dirname, '../../dev/renderer/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../../dev/renderer'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    sourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',
  },

  prod: {
    // Template for index.html
    index: path.resolve(__dirname, '../../prod/renderer/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../../prod/renderer'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

       // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
