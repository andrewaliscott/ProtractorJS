

describe('amazon', () => {


it('should behave...', () => {


browser.waitForAngularEnabled(false);
browser.get("https://www.amazon.com/");

browser.getTitle().then(function(title){
console.log(title);

if(title=="Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more"){
console.log("Title successfully displayed");
}else {
console.log("Test Failed");
}

browser.getCurrentUrl().then(function(url){
console.log(url);
if(url=="https://www.amazon.com/"){
console.log("URL test passed");
}else{
console.log("URL Test Failed");
}
});


$("span[class= 'nav-sprite nav-logo-base']").isDisplayed().then(function(result){
if(result==true){
console.log("Logo successfully displayed");

} else{
console.log("Test TFiled"); 
}
})


//element(by.id("twotabsearchtextbox"))
$("#twotabsearchtextbox").sendKeys("laptop");

$("[value='Go']").click();


$('div>#s-result-count').getText().then(function(text){
console.log(text);
let t=text.split(" ");
let qty=t[t.indexOf("results")-1];
console.log(qty);

if(qty>300 && qty<1000){
console.log("Wow there are more than 300 but less than 1000")
} else if(qty>1000 && qty<10000){
console.log("There are more than 1000 but less than 10000")
}else {
console.log(qty);
}

var arr=[];
$$('.a-link-normal.a-color-base.a-text-bold.a-text-normal').getText().then((text)=>{
//console.log(text) 

for(let i of text){
arr.push(i);
}
console.log(arr);

});


$$("[id='leftNavContainer']>ul:nth-child(12) li").getText().then(function(size){
//console.log(size);

for(let i of size){
console.log(i)
}

});


$$("[id='leftNavContainer']>ul:nth-child(12) li").get(2).click();
browser.sleep(2000);

$('#low-price').sendKeys(400);
$('#high-price').sendKeys(700);
browser.sleep(2000);
$(".a-button.a-spacing-top-mini.s-small-margin-left input").click();
browser.sleep(2000);


$('#s-result-count').getText().then(function(result){
console.log(result);
});
});

 

browser.sleep(8000);


});
});
