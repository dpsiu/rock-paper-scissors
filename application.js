console.log(2+2);

function getComputerChoice(gameOptions){
    return gameOptions[Math.floor(Math.random()*gameOptions.length)];
}

let gameOptions = ['Rock', 'Paper', 'Scissors'];
console.log(getComputerChoice(gameOptions));

