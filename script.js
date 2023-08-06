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

/**
 * Prompt the player to enter their choice (rock, paper, or scissors).
 * Validates the input and returns the player's choice if valid.
 * @returns {string|undefined} The player's choice - rock, paper, or scissors. Returns undefined if 
 * the prompt is canceled.
 */
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

/**
 * Validates the player's choice to ensure it contains only letters (no numbers or special characters)
 * and is one of the valid options (rock, paper, or scissors).
 * If the input is invalid, it prompts the player again for a valid choice.
 * @param {string} playerChoice - The player's input choice to validate.
 * @returns {string|boolean} The valid player's choice (rock, paper, or scissors) if input is valid; 
 * otherwise, returns true to indicate successful validation.
 */
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

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return {
            isWinner: null,
            player: playerSelection,
            computer: computerSelection,
            msg: 'DRAW'
        };
    }

    if((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')){
            return {
                isWinner: true,
                player: playerSelection,
                computer: computerSelection,
                msg: 'PLAYER WINS!'
            };
        }
    
    return {
        isWinner: false,
        player: playerSelection,
        computer: computerSelection,
        msg: 'COMPUTER WINS!'
    };
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    while(playerScore !== 5 && computerScore !== 5){
        let gamePlay = playRound(getPlayerChoice(), getComputerChoice());
        switch(gamePlay.isWinner){
            case null:
                console.log(`${gamePlay.msg} | Player: ${gamePlay.player}; Computer: ${gamePlay.computer} | Score: P-${playerScore}/C-${computerScore}`);
                continue;
            case true:
                playerScore++;
                console.log(`${gamePlay.msg} | Player: ${gamePlay.player}; Computer: ${gamePlay.computer} | Score: P-${playerScore}/C-${computerScore}`);
                continue;
            case false:
                computerScore++;
                console.log(`${gamePlay.msg} | Player: ${gamePlay.player}; Computer: ${gamePlay.computer} | Score: P-${playerScore}/C-${computerScore}`);
                continue;
        }
    }

    if(playerScore > computerScore){
        return console.log(`YOU ARE THE WINNER!`);
    } else {
        return console.log(`COMPUTER IS THE WINNER!`);
    }
}

game();