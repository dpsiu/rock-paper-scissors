
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
rockButton.addEventListener('click', () => playRound('Rock', getComputerChoice(gameOptions)));
paperButton.addEventListener('click', () => playRound('Paper', getComputerChoice(gameOptions)));
scissorsButton.addEventListener('click', () => playRound('Scissors', getComputerChoice(gameOptions)));


/*Restart button to appear at the end of a game with functionality to reload page/game. */
restartButton.addEventListener('click', () => window.location.reload());
document.getElementById("restartButton").style.visibility = "hidden";


/*Plays a round of RPS. Accounts for all 7 outcomes. First prompts user for choice. */
function playRound(playerSelection, computerSelection){
    /*Compares player and comp selection to retreive round winner */
    if (playerSelection === computerSelection){
        document.getElementById("round").textContent = "Tie round.";
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Scissors'
            || playerSelection === 'Paper' && computerSelection === 'Rock'
            || playerSelection === 'Scissors' && computerSelection === 'Paper'){
        document.getElementById("playerScore").textContent = playerScore ++;
        document.getElementById("round").textContent = "You won this round. "  + playerSelection + " beats " + computerSelection + ".";
        game(playerScore, computerScore);
        console.log((playerScore-1), (computerScore-1));
    }
    else if(computerSelection === 'Rock' && playerSelection === 'Scissors'
            || computerSelection === 'Paper' && playerSelection === 'Rock'
            || computerSelection === 'Scissors' && playerSelection === 'Paper'){
        document.getElementById("computerScore").textContent = computerScore ++;
        document.getElementById("round").textContent = "You lost this round. "  + computerSelection + " beats " + playerSelection + ".";
        game(playerScore, computerScore);
        console.log((playerScore-1), (computerScore-1));

    }
}


// Declares a winner once their index = 6 (When their points = 5)
function game(playerScore, computerScore){
    if (playerScore === 6){
        document.getElementById("round").textContent = "Player wins " + (playerScore-1) + " to " + (computerScore-1) + "!!!";
        document.getElementById("restartButton").style.visibility = "visible";
        disableButton();
    }
    else if (computerScore === 6){
        document.getElementById("round").textContent = "Computer wins " + (computerScore-1) + " to " + (playerScore-1) + "...";
        document.getElementById("restartButton").style.visibility = "visible";
        disableButton();
    }
}

function disableButton(){
    document.querySelector("#rockButton").disabled = true;
    document.querySelector("#paperButton").disabled = true;
    document.querySelector("#scissorsButton").disabled = true;
}
