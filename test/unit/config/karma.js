'use strict';

module.exports = function (config) {
  config.set({
    basePath: '../',
    frameworks: ['browserify', 'mocha', 'es5-shim'],
    autoWatch: true,
    browsers: ['PhantomJS'],

    plugins: [
      'karma-mocha',
      'karma-browserify',
      'karma-es5-shim',
      'karma-phantomjs-launcher',
      'karma-mocha-reporter'
    ],

    port: 7357,
    reporters: ['mocha'],
    preprocessors: {
      '**/*.js': ['browserify']
    },
    browserify: {
      extensions: ['.js', '.json'],
      ignore: [],
      watch: true,
      debug: true,
      noParse: [],
      transform: ['babelify']
    },
    files: [
      '**/*.js'
    ],
    exclude: ['**/*.swp']
  });
};
