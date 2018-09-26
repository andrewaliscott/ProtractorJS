describe('Chain locators',function() {

    it('TestCase',function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();

        element(by.model("operator")).element(by.css("option:nth-child(2)")).getText().then(function(hh) {
            console.log(hh);

        });
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){

            console.log(text); })

    })

})
