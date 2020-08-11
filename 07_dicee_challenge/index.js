
const randomNumber1 =  getRandomIntInclusive(1, 6);
const randomNumber2 =  getRandomIntInclusive(1, 6);

const dices = document.querySelectorAll('img');
dices.forEach(dice => {
    dice.setAttribute('src', './images/dice6.png');
})

const dice1 = document.querySelector('.img1');
dice1.setAttribute('src', `./images/dice${randomNumber1}.png`);
const dice2 = document.querySelector('.img2');
dice2.setAttribute('src', `./images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerText = '🚩Player 1 Wins!';
} 
else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerText = 'Player 2 Wins! 🚩';
}
else {
    document.querySelector('h1').innerText = 'Draw!';
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}