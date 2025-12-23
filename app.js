let userscore = 0;
let compscore = 0;
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const showWinner = (userWin, userchoice, compChoice) => {
  if (userWin) {
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `You Win! Your's ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = `You lose! Computer's ${compChoice} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const drawGame = () => {
  console.log("Game was Draw");
  msg.innerText = "Game was Draw. Play again";
  msg.style.backgroundColor = "#081b31";
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playGame = (userchoice) => {
  //generate comp choice
  const compChoice = genCompChoice();

  //draw game
  if (userchoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userchoice == "rock") {
      userWin = compChoice == "paper" ? false : true;
    } else if (userchoice == "paper") {
      userWin = compChoice == "scissor" ? false : true;
    } else {
      userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin, userchoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
