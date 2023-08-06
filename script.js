/**
 * Represents the options rock, paper, and scissors in the game.
 * @constant {string}
 */
const OPT_ROCK = 'rock';
const OPT_PAPER = 'paper';
const OPT_SCISSORS = 'scissors';

/**
 * Generates a random integer between the given minimum and maximum values (inclusive).
 * @returns {number} A random integer between the specified range.
 */
function getRandomInt(){
    const MIN = 1;
    const MAX = 3;
    return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
}

/**
 * Gets the computer's choice in the game randomly.
 * @returns {string} The computer's choice - either 'rock', 'paper', or 'scissors'.
 */
function getComputerChoice(){
    let computerChoice = getRandomInt();
    switch(computerChoice){
        case 1:
            return OPT_ROCK;
        case 2:
            return OPT_PAPER;
        case 3:
            return OPT_SCISSORS;
    }
}

function getPlayerChoice(){
    let playerChoice = prompt('Please enter either rock, paper, or scissors:');
    if(playerChoice === null){
        return;
    }

    if(playerChoice === ''){
        alert('To start playing, please enter either rock, paper, or scissors.');
        return getPlayerChoice();

    }

    playerChoice.trim().toLowerCase();
    if(validatePlayerChoice(playerChoice)){
        return playerChoice;
    }
}

function validatePlayerChoice(playerChoice){
    let regex = /[^a-zA-Z]/;
    if(!isNaN(playerChoice) || regex.test(playerChoice)){
        alert('Please enter letters only. Numbers and special characters are not allowed.');
        return getPlayerChoice();
    }

    if(playerChoice !== 'rock' && 
        playerChoice !== 'paper' &&
        playerChoice !== 'scissors') {
            alert('Please enter either rock, paper, or scissors only.');
            return getPlayerChoice();
    }

    return true;
}