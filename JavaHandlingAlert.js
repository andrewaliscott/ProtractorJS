describe("Action Demo", function() {

    it("Open Posse Website", function() {

        browser.waitForAngularEnabled(false);
        browser.get("http://qaclickacademy.com/practice.php");
        element(by.id("confirmbtn")).click();
        browser.switchTo().alert().accept().then(function() {
            browser.sleep(5000);
        })

    })

})

