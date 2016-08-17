exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: ['public/test/e2e/protractor/**/*Spec.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            args: ['--no-sandbox']
        }
    }
    
}