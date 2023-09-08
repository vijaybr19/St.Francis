 //Detecs the button pressed
 var numberofDrumbuttons = document.querySelector(".drum").lenght;

 for(var i = 0 ; i<numberofDrumbuttons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHtml = this.InnerHtml;
        makesound(buttonInnerHtml);
        makeanimation(buttonInnerHtml);
     });
 }
//Detects the keyboard
 document.addEventListener('keydown', function(event){
    makesound(event.key);
    makeanimation(event.key);
 });

 function makesound(key){

    switch(key){
        case "W":
        var tom1 = new Audio ('sounds/tom-1.mp3');
        tom1.play();
        break;

        case "W":
        var tom1 = new Audio ('sounds/tom-1.mp3');
        tom1.play();
        break;

        case "W":
        var tom1 = new Audio ('sounds/tom-1.mp3');
        tom1.play();
        break;

        case "W":
        var tom1 = new Audio ('sounds/tom-1.mp3');
        tom1.play();
        break;

        case "W":
        var tom1 = new Audio ('sounds/tom-1.mp3');
        tom1.play();
        break;

        case "W":
        var tom1 = new Audio ('sounds/tom-1.mp3');
        tom1.play();
        break;

        case "W":
        var tom1 = new Audio ('sounds/tom-1.mp3');
        tom1.play();
        break;

        default : console.log();
    }
 }

 function makeanimation(currentkey){

    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
 }