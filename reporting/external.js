function Framework() {

    this.firstInput=element(by.model("first"));
    this.secondInput=element(by.model("second"));
    this.result=element(by.css("h2[class='ng-binding']"));
    this.go=element(by.id("gobutton"));
}


module.exports=new Framework();






