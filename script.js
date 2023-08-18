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

const startGame = () => {
  playerPoint.textContent = "0";
  computerPoint.textContent = "0";
  gameResult.textContent = "";

  quitBtn.disabled = false;
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  startBtn.disabled = true;
  return;
};

const quitGame = () => {
  gameResult.textContent = "GAME ENDED";

  quitBtn.disabled = true;
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
  startBtn.disabled = false;
  playerScore = 0;
  computerScore = 0;
  return;
};

const getRoundResult = (player, computer) => {
  if (player === computer) {
    return undefined;
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (result) => {
  if (result) {
    playerScore++;
    playerPoint.textContent = playerScore.toString();
    return;
  } else {
    computerScore++;
    computerPoint.textContent = computerScore.toString();
    return;
  }
};

const playRound = (playerChoice) => {
  const computerChoices = ["rock", "paper", "scissors"];
  const computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  const roundResult = getRoundResult(playerChoice, computerChoice);
  console.log(roundResult);

  if (roundResult === undefined) {
    gameResult.textContent = `IT'S A TIE! | Player: ${playerChoice.toUpperCase()} | Computer: ${computerChoice.toUpperCase()}`;
    return;
  }

  if (getRoundResult(playerChoice, computerChoice)) {
    gameResult.textContent = `YOU WIN! | Player: ${playerChoice.toUpperCase()} | Computer: ${computerChoice.toUpperCase()}`;
    updateScore(roundResult);
    return;
  } else {
    gameResult.textContent = `COMPUTER WIN! | Player: ${playerChoice.toUpperCase()} | Computer: ${computerChoice.toUpperCase()}`;
    updateScore(roundResult);
    return;
  }
};

const endGame = () => {
  if (playerScore === 5 || computerScore === 5) {
    quitBtn.disabled = true;
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    startBtn.disabled = false;
    playerScore = 0;
    computerScore = 0;
  }
};

startBtn.addEventListener("click", startGame);
quitBtn.addEventListener("click", quitGame);
gameChoices.addEventListener("click", (event) => {
  if (event.target.classList.contains("game-choices__btn")) {
    playRound(event.target.textContent.trim().toLowerCase());
  }
  endGame();
});
