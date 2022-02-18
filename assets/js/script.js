
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

for (let buttons of buttons) {
    button.addEventListener("click", function(){
        let playerChoice = this.getAttribute("data.choice");
        playGame(playerChoice); 
    }
}

function playGame(playerChoice){
    playerImage.src = 'assets/images${choices[playerChoice]}.jpg';
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    if (computerChoice === 1) {
        computerChoice = 'rock';
    }

    if (computerChoice === 2) {
        computerChoice = 'paper';
    }

    if(computerChoice === 3) {
        computerChoice = 'scissors';
    }

    if(computerChoice === 4) {
        computerChoice = 'lizard';
    }

    if(computerChoice === 5) {
        computerChoice = 'spock';
    }

    computerImage.src = 'assets/images${choices[computerChoice]}.jpg';
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], [playerChoice]);

    updateScores(result);
}

// See who's won

 if (playerChoice === computerChoice)
       result = ("It's a tie!"); 
    else if (playerChoice === "Rock"){
      if (computerChoice ==="Scissors"){
        result("You win!!");
    } else if (computerChoice === "Paper"){ 
        result("Computer wins! Try again!"); 
    } else if (playerChoice ==="Paper"){ 
       if (computerChoice ==="Scissors")
       result("Computer wins! Try again!"); 
    } else if (computerChoice === "Rock"){ 
        result("You win!"); 
    }else if (playerChoice === "Scissors"){
        if (computerChoice === "Paper") 
        result =("You win!"); 
    ] else if (computerChoice ==="Rock"){ 
        result("Computer wins! Try again!"); 
    