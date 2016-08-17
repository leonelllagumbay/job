// Karma configuration
// Generated on Mon Aug 01 2016 08:05:00 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({ 

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      "public/bower_components/angular/angular.js",
      "public/bower_components/angular-mocks/angular-mocks.js",
      "public/bower_components/angular-route/angular-route.js",
      "public/bower_components/angular-resource/angular-resource.js",
      "public/bower_components/angular-ui-router/release/angular-ui-router.js",
      "public/app/**/*.js",
      "public/test/app/**/*Spec.js",
      "public/app/views/**/*.html"
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        //
        // your other preprocessors
        //

        //
        // tell karma to use the ng-html2js preprocessor
        "public/app/**/*.html": "ng-html2js"
    },

    ngHtml2JsPreprocessor: {
        //
        // Make up a module name to contain your templates.
        // We will use this name in the jasmine test code.
        // For advanced configs, see https://github.com/karma-runner/karma-ng-html2js-preprocessor
        moduleName: 'test-templates',
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    //port: 9876,
    hostname: process.env.IP,
    port: process.env.PORT,
    runnerPort: 0,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
