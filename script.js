const startBtn = document.querySelector("#startBtn");
const quitBtn = document.querySelector("#quitBtn");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const gameChoices = document.querySelector(".game-choices");

let playerPoint = document.querySelector("#playerPoint");
let computerPoint = document.querySelector("#computerPoint");
let gameResult = document.querySelector("#gameResult");

let playerScore = 0;
let computerScore = 0;

function startGame() {
  playerPoint.textContent = "0";
  computerPoint.textContent = "0";
  gameResult.textContent = "";

  quitBtn.disabled = false;
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  startBtn.disabled = true;
}

function quitGame() {
  gameResult.textContent = "GAME ENDED";

  quitBtn.disabled = true;
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
  startBtn.disabled = false;
  playerScore = 0;
  computerScore = 0;
}

function playRound(playerChoice) {
  const computerChoices = ["rock", "paper", "scissors"];
  const computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  if (playerChoice === computerChoice) {
    // display outcome
    gameResult.textContent = `IT'S A TIE! | Player: ${playerChoice.toUpperCase()} | Computer: ${computerChoice.toUpperCase()}`;
    return;
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    // display outcome
    gameResult.textContent = `YOU WIN! | Player: ${playerChoice.toUpperCase()} | Computer: ${computerChoice.toUpperCase()}`;
    
    // update score
    playerScore++;
    playerPoint.textContent = playerScore.toString();
    return;
  } else {
    // display outcome
    gameResult.textContent = `COMPUTER WIN! | Player: ${playerChoice.toUpperCase()} | Computer: ${computerChoice.toUpperCase()}`;
    // udpate score
    computerScore++;
    computerPoint.textContent = computerScore.toString();
    return;
  }
}

startBtn.addEventListener("click", startGame);
quitBtn.addEventListener("click", quitGame);
gameChoices.addEventListener("click", (event) => {
  
  if (event.target.classList.contains("game-choices__btn")) {
    playRound(event.target.textContent.trim().toLowerCase());
  }

  // ends the game
  if (playerScore === 5 || computerScore === 5) {
    quitBtn.disabled = true;
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    startBtn.disabled = false;
    playerScore = 0;
    computerScore = 0;
  }
});
