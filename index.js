let chosenWord;
const title = document.querySelector('.title');
const button = document.querySelector('.button');
const paragraph = document.querySelector('p');
const word = document.querySelector('h1');
let count = 0;
let playerCount = 0;
let imposter = Math.floor(Math.random() * 8) + 1;

fetch('items.json')
    .then(response => response.json())
    .then(data => {
        chosenWord = data[Math.floor(Math.random() * data.length)].name;
    });

document.querySelector('.button').onclick = () => {
    if (button.innerHTML === 'Done') {
        return;
    }

    if (count % 2 === 0 || count === 0) {
        playerCount++;
        button.innerHTML = 'Show My Word';
        word.style.visibility = 'hidden';

    } else {
        button.innerHTML = 'Hide Word & Pass';
        if (playerCount === imposter) {
            word.innerHTML = "Imposter";
        } else {
            word.innerHTML = chosenWord;
        }
        word.style.visibility = 'visible';
    }
    title.innerHTML = `Player ${playerCount}`;
    count++;

    if (count === 16) {
    button.innerHTML = 'Done';
    }
};