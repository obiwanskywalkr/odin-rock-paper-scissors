// When the user clicks a button (playerSelection)
let playerSelection = undefined;

const playerChoice = document.querySelector('#player-input');

buttons = document.querySelectorAll('input');
buttons.forEach((input) => {
    input.addEventListener('click', (e) => {
        playerSelection = e.currentTarget.id;
        playerChoice.setAttribute('src', e.currentTarget.src);
        playGame(playRound(playerSelection, computerPlay()));
    });
});
// Get a randomly generated guess for the computer's turn (computerPlay)
let computerSelection = undefined

const computerInput = document.querySelector('#computer-input');

function computerPlay() {
    let randomInt = (Math.floor(Math.random() * 3) + 1);

    if (randomInt == 1) {
        computerInput.setAttribute('src', './rock.png')
        return computerSelection = 'rock';
    } else if (randomInt == 2) {
        computerInput.setAttribute('src', './paper.png')
        return computerSelection = 'paper';
    } else if (randomInt == 3) {
        computerInput.setAttribute('src', './scissors.png')
        return computerSelection = 'scissors';
    } else {
        randomInt = 0;
        return computerPlay();
    }
}
// Compare the user's input to the computer's input (playRound)
let playerScore = 0;
let computerScore = 0;

const results = document.querySelector('#info');

function playRound(playerSelection, computerSelection) {
    results.textContent = ''

    if (playerSelection === computerSelection) {
        return results.textContent = `This round was a draw.`

    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'paper' && computerSelection == 'rock') ||
            (playerSelection == 'scissors' && computerSelection == 'paper')) {
            results.textContent = `You won this round!`
            playerScore++;
            updatePlayerScore();
            return playerScore;

    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'scissors') ||
            (playerSelection == 'scissors' && computerSelection == 'rock')) {
            results.textContent = `The computer won this round.`
            computerScore++;
            updateComputerScore();
            return computerScore;
    }
}
// Update display for the current score
function updatePlayerScore() {
    const playerTag = document.querySelector('#player-score');
    playerTag.textContent = `Your score: ${playerScore}`
}

function updateComputerScore(){
    const computerTag = document.querySelector('#computer-score');
    computerTag.textContent = `Computer's score: ${computerScore}`
}
// Play rounds until one player reaches 5 points
function playGame(playRound) {
    if ((playerScore < 5) && (computerScore < 5)) {
        
    } else {
        whoWon();
        playerScore = 0;
        computerScore = 0;
        updatePlayerScore();
        updateComputerScore();
    }
}
// Display the winner of the game
function whoWon(playRound) {
    if (playerScore > computerScore) {
        results.textContent = 'You reached 5 points first. You won the game!'
    } else if (playerScore < computerScore) {
        results.textContent = 'The computer reached five points first. You lost the game.'
    }
}