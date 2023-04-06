
let playerScore = 1;
let computerScore = 1;
let roundNumber = 0;


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



/*
getPlayerSelection();

function getPlayerSelection(){
    playerSelection = prompt("Do you choose Rock, Paper, or Scissors?");
    if (playerSelection.toLowerCase === 'rock'.toLowerCase){
        playRound('Rock', getComputerChoice(gameOptions));
        console.log("rock");
    }
    else if (playerSelection.toLowerCase === 'Paper'.toLowerCase){
        playRound('Paper', getComputerChoice(gameOptions));
        console.log("paper");

    }    
    else if (playerSelection.toLowerCase === 'Scissors'.toLowerCase){
        playRound('Scissors', getComputerChoice(gameOptions));
        console.log("scissors");

    }
}



/*Plays a round of RPS. Accounts for all 7 outcomes. First prompts user for choice. */
function playRound(playerSelection, computerSelection){
    /*Compares player and comp selection to retreive round winner */
    if (playerSelection === computerSelection){
        document.getElementById("round").innerHTML = "Tie round.";
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Scissors'
            || playerSelection === 'Paper' && computerSelection === 'Rock'
            || playerSelection === 'Scissors' && computerSelection === 'Paper'){
        document.getElementById("playerScore").innerHTML = playerScore ++;
        document.getElementById("round").innerHTML = "You won this round. "  + playerSelection + " beats " + computerSelection + ".";
        game(playerScore, computerScore);
    }
    else if(computerSelection === 'Rock' && playerSelection === 'Scissors'
            || computerSelection === 'Paper' && playerSelection === 'Rock'
            || computerSelection === 'Scissors' && playerSelection === 'Paper'){
        document.getElementById("computerScore").innerHTML = computerScore ++;
        document.getElementById("round").innerHTML = "You lost this round. "  + computerSelection + " beats " + playerSelection + ".";
        game(playerScore, computerScore);
    }
}

function game(playerScore, computerScore){
    if (playerScore === 6){
        document.getElementById("round").innerHTML = "Player wins " + (playerScore-1) + " to " + (computerScore-1) + "!!!";
        document.getElementById("restartButton").style.visibility = "visible";
        disableButton();
    }
    else if (computerScore === 6){
        document.getElementById("round").innerHTML = "Computer wins " + (computerScore-1) + " to " + (playerScore-1) + "...";
        document.getElementById("restartButton").style.visibility = "visible";
        disableButton();

    }
    
}

function disableButton(){
    document.querySelector("#rockButton").disabled = true;
    document.querySelector("#paperButton").disabled = true;
    document.querySelector("#scissorsButton").disabled = true;
}
//

//game(playerScore, computerScore);

