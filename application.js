console.log(2+2);

let playerScore = 1;
let computerScore = 1;


/*Return a random value for computer choice */
function getComputerChoice(gameOptions){
    return gameOptions[Math.floor(Math.random()*gameOptions.length)];
}
let gameOptions = ['Rock', 'Paper', 'Scissors'];



let computerSelection = getComputerChoice(gameOptions);

/*Player selection is null until a button is pressed */
let playerSelection = '';

/*Adds functionality to buttons. Assigns the player's selection. */
if (rockButton.addEventListener('click', () => playRound('Rock', getComputerChoice(gameOptions)))){
    console.log(playRound(playerSelection, computerSelection));
}
else if (paperButton.addEventListener('click', () => playRound('Paper', getComputerChoice(gameOptions)))){
    console.log(playRound(playerSelection, computerSelection));
}
else if (scissorsButton.addEventListener('click', () => playRound('Scissors', getComputerChoice(gameOptions))))
    console.log(playRound(playerSelection, computerSelection));


console.log(computerSelection);
console.log(playerSelection);

/*Plays a round of RPS. Accounts for all 7 outcomes. */
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        console.log("Tie");
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Scissors'
            || playerSelection === 'Paper' && computerSelection === 'Rock'
            || playerSelection === 'Scissors' && computerSelection === 'Paper'){
        console.log("Player wins!" + playerSelection + " beats " + computerSelection + ".")
        document.getElementById("playerScore").innerHTML = playerScore ++;
    }
    else if(computerSelection === 'Rock' && playerSelection === 'Scissors'
            || computerSelection === 'Paper' && playerSelection === 'Rock'
            || computerSelection === 'Scissors' && playerSelection === 'Paper'){
        console.log("Computer wins!" + computerSelection + " beats " + playerSelection + ".")
        document.getElementById("computerScore").innerHTML = computerScore ++;
    }
}


/* 
#Here I have the following. 
function getComputerChoice(gameOptions){
    return gameOptions[Math.floor(Math.random()*gameOptions.length)];
}
let gameOptions = ['Rock', 'Paper', 'Scissors'];

#I then assign it to this variable.
let computerSelection = getComputerChoice(gameOptions);

#When computerSelection is called, it returns the same number repeatedly.
Rather than a new random number like getComputerChoice(gameOptions);
Which is what is is equal to. Why?

*/

/*function playRound(playerSelection, computerSelection){
    const computerSelection = getComputerChoice;
}

*/