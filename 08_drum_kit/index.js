function playSound(buttonInnerHtml) {
    switch (buttonInnerHtml) {
        case 'w':
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;

        case 'a':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;

        case 's':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;

        case 'j':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;

        case 'k':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;

        case 'l':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;

        default:
            console.log(buttonInnerHtml);
            break;
    }
}

let buttons = document.querySelectorAll('.drum');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        console.log(event.target);
        let buttonInnerHtml = event.target.innerHTML;
        playSound(buttonInnerHtml);
    });
});

document.addEventListener('keydown', (event) => {
    console.log(event);
    if(event.type !== 'keydown')
        return;

    playSound(event.key);
});

