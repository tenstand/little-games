
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

    computerImage.src = 'assets/images${choices[computerChoice]}.jpg';
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], [playerChoice]);

    updateScores(result);
}