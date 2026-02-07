let chosenWord;
const title = document.querySelector('.title');
const button = document.querySelector('.button');
const paragraph = document.querySelector('p');
const word = document.querySelector('h1');
let count = 0;
let playerCount = 0;
let imposter;

const playersDisplay = document.querySelector('#players h3');
let players = parseInt(playersDisplay.innerHTML);
const minusBtn = document.querySelector('#players button:first-of-type');
const plusBtn = document.querySelector('#players button:last-child');

fetch('items.json')
    .then(response => response.json())
    .then(data => {
        chosenWord = data[Math.floor(Math.random() * data.length)].name;
    });

document.querySelector('.button').onclick = () => {
    ChooseImposter();
    document.querySelector('.lower').style.display = 'none';

    if (button.innerHTML === 'Done') {
        return;
    }

    ShowPage();

    if (playerCount === players && count % 2 === 0) {
    button.innerHTML = 'Done';
    }
};

function ShowPage() {
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
}

plusBtn.addEventListener('click', () => {
    if (players < 12) {
        players++;
        playersDisplay.textContent = players;
    }
})

minusBtn.addEventListener('click', () => {
    if (players > 3) {
        players--;
        playersDisplay.textContent = players;
    }
});

function ChooseImposter() {
    if (count === 0) {
        imposter = Math.floor(Math.random() * players) + 1;
    }
}