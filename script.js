/**
 * Represents the options rock, paper, and scissors in the game.
 * @constant {tring}
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
    let randNum = getRandomInt();
    switch(randNum){
        case 1:
            return OPT_ROCK;
        case 2:
            return OPT_PAPER;
        case 3:
            return OPT_SCISSORS;
    }
}