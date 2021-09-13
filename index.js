// Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function ()
    {
        var button=this.innerHTML;
        makeSound(button);
        buttonAnimation(button);
    }
    );
}

// KeyBoard Press
$(document).keydown(function(event){
    var button=event.key;
    makeSound(button);
    buttonAnimation(button);
})


//Make Sound
function makeSound(button)
{
    switch(button)
    {
        
        case "w":   var audio=new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;

        case "a":   var audio=new Audio("sounds/tom-2.mp3");
                    audio.play();
                    break;

        case "s":   var audio=new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;

        case "d":   var audio=new Audio("sounds/tom-4.mp3");
                    audio.play();
                    break;

        case "j":   var audio=new Audio("sounds/snare.mp3");
                    audio.play();
                    break;

        case "k":   var audio=new Audio("sounds/crash.mp3");
                    audio.play();
                    break;

        case "l":   var audio=new Audio("sounds/kick-bass.mp3");
                    audio.play();
                    break;

        default:    console.log(button);

    }
    
}

function buttonAnimation(button)
{
    var activeButton = document.querySelector("." + button);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed"); 
    },100);
}