for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeAnimation(this.innerHTML)
        playsound(this.innerHTML)

    }
    )}


document.addEventListener("keydown", function (event) {
    makeAnimation(event.key)
    playsound(event.key)

})


function playsound (key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;

        case "j":
            let crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;

        case "k":
            let bass = new Audio("sounds/kick-bass.mp3")
            bass.play();
            break;

        case "l":
            let snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;

    }
}


function makeAnimation(key) {

    let activeButton = document.querySelector("." + key)
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100)
}

