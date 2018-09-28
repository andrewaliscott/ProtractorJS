exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['submissionofForm.js'],
    capabilities: {
        'browserName': 'chrome'
    }
};