describe('Jasmine Spec Reporter',()=>{


    beforeAll(function() {

        browser.waitForAngularEnabled(false);
        browser.get('http://the-internet.herokuapp.com/');
        element(by.linkText('Multiple Windows')).click();

    });


    it('should get CurrentURL',()=> {

        element(by.css(".example>a")).click();
        browser.getAllWindowHandles().then(function(handles){
            browserHandles=handles;
            browser.switchTo().window(browserHandles[1]).then(function(){
                browser.sleep(3000);
                expect(browser.getCurrentUrl()).toContain('windows/new');
            });
        });

    });



    it('Switch Back to parent Tab',()=> {

        browser.close().then(function(){
            browser.switchTo().window(browserHandles[0]);
            browser.sleep(3000);
            expect(element(by.linkText('Click Here')).isDisplayed()).toBe(true);
        });
    });


    it('IFrame',()=> {

        browser.get('http://the-internet.herokuapp.com/');
        element(by.linkText('Frames')).click();
        element(by.css('#content li:nth-child(2 )>a')).click();
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);

        element(by.css("#tinymce")).click();
        element(by.css("#tinymce")).clear();
        element(by.css("#tinymce")).sendKeys("Hi. My name is Andrew Ali");
        browser.sleep(4000);

        });
    });







