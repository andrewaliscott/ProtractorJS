describe('Chain locators',function() {


    function add(a,b){
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    }
    it('TestCase',function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        add(2,3);
        add(4,5);
        add(7,8);
        add(7,9);
        element.all(by.repeater("result in memory")).count().then(function(number) {
            console.log(number); })

        element.all(by.repeater("result in memory")).each(function(item) {

            item.element(by.css("td:nth-child(3)")).getText().then(function(text){

                console.log(text);
            })

        })
    })

})