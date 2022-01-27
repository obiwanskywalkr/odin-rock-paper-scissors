
// When the user inputs a case-insensitive guess (playerSelection)
const playerInput = undefined;
let playerSelection = undefined;
const computerSelection = computerPlay();
let playerWins = 0;
let computerWins = 0;
let ties = 0;

// Get a randomly generated guess for the computer's turn (computerPlay)
function computerPlay() {
    let randomInt = (Math.floor(Math.random() * 3) + 1);
    let computerGuess = undefined;

    if (randomInt == 1) {
        computerGuess = 'ROCK';
        return computerGuess;
    } else if (randomInt == 2) {
        computerGuess = 'PAPER';
        return computerGuess;
    } else if (randomInt == 3) {
        computerGuess = 'SCISSORS';
        return computerGuess;
    } else {
        console.log(`The Math.random function got ${randomInt} somehow???`)
        return 'ERROR';
    }
}

// Compare the user's guess to the computer's guess (playRound)
    // If user chooses rock and computer chooses paper, computer wins
    // If user chooses rock and computer chooses scissors, user wins
    // If user chooses paper and computer chooses scissors, computer wins
    // If user chooses paper and computer chooses rock, user wins
    // If user chooses scissors and computer chooses rock, computer wins
    // if user chooses scissors and computer chooses paper, user wins
function playRound(playerInput, computerSelection) {
    // Prompt user for input for every round played
    playerInput = window.prompt('Rock, paper, or scissors?');
    playerSelection = playerInput.toUpperCase();

    if (playerSelection === computerSelection) {
        ++ties;

    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        return ++computerWins;

    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        return ++playerWins;

    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        return ++computerWins;

    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        return ++playerWins;

    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        return ++computerWins;

    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        return ++playerWins;

    } else {
        // Alert users of typo 
        window.alert('ERROR (Hint: Check your spelling!)');
        // Restart round
        return (playRound(playerInput, computerPlay()));
    }
}

    // Print the results
console.log(playRound());