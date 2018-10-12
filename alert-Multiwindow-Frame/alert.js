describe('Jasmine Spec Reporter',()=>{


    beforeAll(function() {

        browser.waitForAngularEnabled(false);
        browser.get('http://the-internet.herokuapp.com/');
        element(by.linkText('JavaScript Alerts')).click();

    });


    it('should get text of alert',()=> {

        element(by.buttonText('Click for JS Alert')).click();
        browser.sleep(4000);
        expect(browser.switchTo().alert().getText()).toEqual("I am a JS Alert");

        browser.switchTo().alert().accept();
        browser.sleep(2000);
        expect(element(by.id("result")).getText()).toEqual("You successfuly clicked an alert");

        element(by.id("result")).getText().then(function(text) {
            console.log(text);

        })
        browser.sleep(3000);

        })



    it('Accept or dismiss',()=> {

        element(by.buttonText('Click for JS Confirm')).click();
        browser.sleep(4000);
        expect(browser.switchTo().alert().getText()).toEqual("I am a JS Confirm");

        browser.switchTo().alert().dismiss();
        browser.sleep(2000);
        expect(element(by.id("result")).getText()).toEqual("You clicked: Cancel");

        element(by.id("result")).getText().then(function(text) {
            console.log(text);

        })
        browser.sleep(3000);

    })

    it('should send some text to alert', () => {
        element(by.buttonText('Click for JS Prompt')).click();
        browser.sleep(3000);
        myAlert = browser.switchTo().alert();
        expect(myAlert.getText()).toEqual('I am a JS prompt');
        text = 'PracticeWebSite';
        myAlert.sendKeys(text);
        myAlert.accept();
        browser.sleep(3000);
        expect(element(by.id('result')).getText()).toEqual('You entered: '+text);
    });



});