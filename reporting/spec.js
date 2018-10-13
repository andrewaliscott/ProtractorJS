describe('FrameWork Example', function(){

    let obj=require("./external.js");
    let datafile=require("./data.js")
    var using = require('jasmine-data-provider');
    function calc(a,b){
        obj.firstInput.sendKeys(a);
        obj.secondInput.sendKeys(b);


    }

    beforeEach(function() {

        browser.get('http://juliemr.github.io/protractor-demo/');

    });

   using(datafile.DataDriven, function (data,description) {

       it('Test Case 1', function(){


           calc(data.firstInput,data.secondInput);
           obj.go.click();
           expect(obj.result.getText()).toEqual(data.result);

       });

   })


    afterEach(function() {

        // reporting

    });

   
});


