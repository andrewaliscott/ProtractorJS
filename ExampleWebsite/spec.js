describe('Automate', function(){

    function Select(product){

        element.all(by.css("h4 a")).each(function(item,index) {



            item.getText().then(function(text){
                if(text==product)
                 {
                     console.log(index);
                     element.all(By.css("button[class*='btn-info']")).get(index).click();
                     browser.sleep(2000);

                }

            })
        })


        //Another approach for adding items to the cart
        // element.al(by.tagName("app-card")).each(function(item)
        // {
        //
        //     item.element(by.css("h4 a")).getText().then(function(text)
        //     {
        //         if(text=="Samsung Note 8")
        //         {
        //             item.element(By.css("button[class*='btn-info']")).click();
        //             browser.sleep(7000);
        //         }
        //     }) })


    }

    it('All Test Cases', function(){
     browser.waitForAngularEnabled(false);
     browser.get("http://qaclickacademy.github.io/protocommerce");
     element(by.css("input[name='name']")).sendKeys("Andrew");
     element(by.css("input[name='email']")).sendKeys("a@a.com");
     $('#exampleInputPassword1').sendKeys("123456");
     $('#exampleCheck1').click();
     $('#exampleFormControlSelect1').all(by.tagName("option")).get(1).click();
     $('#inlineRadio2').click();
     element(by.css("input[name='bday']")).sendKeys("08121982");
     element(by.buttonText("Submit")).click();
     $(".alert.alert-success.alert-dismissible").getText().then((result)=>{
         console.log(result);
     })
     $('ul>li:nth-child(2) a').click();


     Select("Samsung Note 8");
     browser.sleep(2000);
       Select("Nokia Edge");
        browser.sleep(2000);
        Select("iphone X");
        browser.sleep(2000);
        Select("Blackberry");





    })
})