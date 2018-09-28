describe('qaclickacademy Website Automation', function () {

    it('Form Submisson', function () {

        browser.get("https://qaclickacademy.github.io/protocommerce/");
        element(by.name("name")).sendKeys("Andrew Ali");
        element(by.css("input[name='email']")).sendKeys("aliaslantas@gmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("123456");


        //element(by.css("input[type='checkbox']")).click();
        element(by.id("exampleCheck1")).click();


        //This is a dropdownlist(male,female). the first one is going to choose always first option
        //If I want to choose other option I can Use cssContainingText. with this option I say "Hey We have
        //a few options I want you to choose the one with the text Female. So this is better to use
        element(by.css("[id='exampleFormControlSelect1'] option" ));
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();


        // RadioButton
        //Finding multiple elements
        //in this example ID can be used. but sometimes there is no unique Id.
        //element.all(by.name("inlineRadioOptions")).first().click();
        //element.all(by.name("inlineRadioOptions")).last().click();
        element.all(by.name("inlineRadioOptions")).get(0).click();


        browser.sleep(8000);
        element(by.buttonText("Submit")).click();






    })


})