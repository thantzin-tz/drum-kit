
// drumButtons.forEach(btn => {
//     btn.addEventListener("click", function (){
//         alert("I got clicked")
//     });

// });

// for (let btn of drumButtons) {
//     btn.addEventListener("click", function (){
//         alert("I got clicked")
//     })
// }



///// Detecting Button Press
let drumButtons = document.querySelectorAll(".drum");

for(let i = 0; i < drumButtons.length; i ++){
    drumButtons[i].addEventListener("click", function () {
        let textContentButton = this.textContent;

        makeSound(textContentButton);

        drumAnimation(textContentButton);
        
    });
}

///// Detecting Keyboard Presss
document.addEventListener("keydown", function(e){
    let keyPress = e.key;

    makeSound(keyPress);

    drumAnimation(e.key);
});

function drumAnimation(currentKey){

    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100);
}

function makeSound(key){
      
    switch (key) {
        case "a":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "f":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
        default: console.log(event);
            break;
    }
}