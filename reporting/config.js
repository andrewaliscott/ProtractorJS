let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    framework: 'jasmine',
    directConnect: 'true',
    specs: ['spec.js'],


    onPrepare: function(){
        browser.manage().timeouts().implicitlyWait(12000);
        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));

        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'report',
            preserveDirectory:false,
            screenshotsSubfolder:'images',
            jsonsSubfolder:'Jsons',
            docName:'TestCase2Report.html'
        }).getJasmine2Reporter());
    }
};