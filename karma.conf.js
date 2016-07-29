module.export = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            "bower_components/angular/angular.js",
            "node_modules/angular-mocks/angular-mocks.js",
            "public/app/app.js",
            "public/app/test/appSpec.js"
        ],
        autoWatch: true,
        browsers: ['Chrome']
    })
}