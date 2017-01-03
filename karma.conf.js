var webpackConfig = require('./webpack.config.js');
webpackConfig.devtool = 'inline-source-map';
webpackConfig.entry = {};

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        basePath: '',

        files: [
          'test/tests.webpack.js'
        ],

        frameworks: ['mocha', 'chai'],

        preprocessors: {
          'tests.webpack.js': ['webpack', 'sourcemap']
        },

        reporters: ['progress'],
        webpack: webpackConfig,
        webpackServer: {
          noInfo: true
        },
        port: 9876,
        colors: true,
        autoWatch: false,
        singleRun: true

    });
};