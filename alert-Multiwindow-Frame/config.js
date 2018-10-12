let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
    framework: 'jasmine',
    directConnect: 'true',
    specs: ['multiplewindows.js'],


    onPrepare: function(){
        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));
    }
};