describe('Suzuki', ()=>{

    it('Test Case 1 ', ()=> {

        browser.waitForAngularEnabled(false);
        browser.get("http://www.suzukicycles.com/");
        browser.getTitle().then(text=>{
            console.log(text);

        })

         let display="div>#suzuki";
        //expect(element(by.css("div>#suzuki")).isDisplayed()).toBe(true);

        element(by.css("div#suzuki")).isDisplayed().then((result)=>{

            console.log(result);})



         $('li #cycles') .click();


              // Another way of catching an element
             // element.all(by.css("div[class='catName']")).each(function(item) {
             //
             // item.element(by.tagName("a")).getText().then(function(text) {
             //     categories=text.split("CATEGORY NAME");
             //
             //     console.log(categories.toString());
             //     })
             //
             // })

        var motoTypes2018;
        element.all(by.css("div[class='catName'] a")).each(function(item) {

            item.getText().then(function(text) {
                var motoTypes2018=text.split("CATEGORY NAME");

                console.log(motoTypes2018);


            })
        })

        var motoTypes2016;
        $('#body_0_rptYears_yearItem_3').click();

        element.all(by.css("div[class='catName'] a")).each(function(item) {

            item.getText().then(function(text) {
                var motoTypes2016=text.split("CATEGORY NAME");

                console.log(motoTypes2016);


            })
        })

        expect(motoTypes2016).toEqual(motoTypes2018)

    });

})
