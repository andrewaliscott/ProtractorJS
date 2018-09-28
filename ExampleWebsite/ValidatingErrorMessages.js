describe('qaclickacademy Website Automation', function () {

    it('Form Submisson', function () {

        browser.get("https://qaclickacademy.github.io/protocommerce/");
        element(by.name("name")).sendKeys("Andrew Ali");
        element(by.css("input[name='email']")).sendKeys("aa@gmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("123456");
        element(by.id("exampleCheck1")).click();
        element(by.css("[id='exampleFormControlSelect1'] option" ));
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
        element.all(by.name("inlineRadioOptions")).get(0).click();
        browser.sleep(4000);
        element(by.buttonText("Submit")).click();


        element(by.name("name")).clear();

        //Here entering one character is going to give error. So I send wrong information to grab the error
        // messages. to catch the error we use promises
        element(by.name("name")).sendKeys("n").then(function() {
            element(by.css("div[class='alert alert-danger']")).getText().then(function(text){

                console.log(text);
            });

            //either div[class='alert alert-danger'] can be used

        });








    })


})