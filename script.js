// When the user clicks a button (playerSelection)
let playerSelection = undefined;

buttons = document.querySelectorAll('input');
buttons.forEach((input) => {
    input.addEventListener('click', (e) => {
        playerSelection = e.currentTarget.id;
        playRound(playerSelection, computerPlay());
    });
});

// Get a randomly generated guess for the computer's turn (computerPlay)
let computerSelection = undefined

function computerPlay() {
    let randomInt = (Math.floor(Math.random() * 3) + 1);

    if (randomInt == 1) {
        computerSelection = 'rock';
        return computerSelection;
    } else if (randomInt == 2) {
        computerSelection = 'paper';
        return computerSelection;
    } else if (randomInt == 3) {
        computerSelection = 'scissors';
        return computerSelection;
    } else {
        randomInt = 0;
        return computerPlay();
    }
}

// Compare the user's input to the computer's input (playRound)
let ties = 0;
let playerScore = 0;
let computerScore = 0;

const results = document.querySelector('#info');

function playRound(playerSelection, computerSelection) {
    results.textContent = ''

    if (playerScore < 5 && computerScore < 5) {
        if (playerSelection === computerSelection) {
        ++ties;
        return results.textContent = `This round was a draw.`

        } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                (playerSelection == 'paper' && computerSelection == 'rock') ||
                (playerSelection == 'scissors' && computerSelection == 'paper')) {
                ++playerScore;
                updatePlayerTally();
                return results.textContent = `You won this round!`

        } else if((playerSelection == 'rock' && computerSelection == 'paper') ||
                (playerSelection == 'paper' && computerSelection == 'scissors') ||
                (playerSelection == 'scissors' && computerSelection == 'rock')) {
                ++computerScore;
                updateComputerTally();
                return results.textContent = `The computer won this round.`
        } 
    } else {
        return whoWon();
    }
}

// Display the running score
function updatePlayerTally() {
    const playerTally = document.querySelector('#player-score');
    playerTally.textContent = `Your score: ${playerScore}`
}

function updateComputerTally(){
    const computerTally = document.querySelector('#computer-score');
    computerTally.textContent = `Computer's score: ${computerScore}`
}

//Announce a winner once one player reaches 5 points
function whoWon(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return results.textContent = `You reached 5 points first, you won the game!`
    } else {
        return results.textContent = `The computer reached 5 points first, you lost the game.`
    }
}