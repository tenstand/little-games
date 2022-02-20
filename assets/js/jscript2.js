document.addEventListener('DOMContentLoaded', function() {
    var computerScore = 0;
    var userScore = 0;


    const playerButtons = document.getElementsByTagName('button');
    for (let button of playerButtons) {
        button.addEventListener('click', userPlay);
    }

    function userPlay(event){
        const clickedButton = event.target;
        const userChoice = clickedButton.getAttribute('data-choice');
        const userImage = document.getElementById('userPlay');
        userImage.setAttribute('src', './assets/images/' + userChoice + '.jpg');
        const computerChoice = computerPlay();
        console.log('Computer played ' + computerChoice + ' user played '+ userChoice);
        roundWinner(userChoice, computerChoice);
         
    }

    function computerPlay(){
        const computerChoice = Math.floor(Math.random() * 5);
        const plays = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        const computerImage = document.getElementById('computerPlay');
        computerImage.setAttribute('src', './assets/images/' + plays[computerChoice] + '.jpg');
        return plays[computerChoice];
    }

    function computerWins(){
        computerScore = computerScore + 1;
        alert('Computer wins Score '+ computerScore);
    }

    function userWins(){
        userScore = userScore + 1;
        alert('User wins Score '+ userScore);
        document.getElementById('player-score').innerText = userScore;
    }

    function roundWinner(userChoice, computerChoice){
        if (userChoice === computerChoice){
            alert(' its a tie');
        }
        else{
            // User Rock
            if (userChoice === 'rock'){
                const beatsRock = ['paper', 'spock']
                if (beatsRock.includes(computerChoice)){
                    computerWins();
                }
                else{
                    userWins();
                }
            }
        else{  
            // User Paper
            if (userChoice === 'paper'){
                const beatsPaper = ['scissors', 'lizard']
                if (beatsPaper.includes(computerChoice)){
                    computerWins();
                }
                else{
                    userWins();
                }    
        else{  
             // User Scissors
            if (userChoice === 'scissors'){
            const beatsScissors = ['spock', 'rock']
            if (beatsPaper.includes(computerChoice)){
                computerWins();
                }
                else{
                    userWins();
                }    
        else{  
            // User Lizard
            if (userChoice === 'lizard'){
            const beatsLizard = ['scissors', 'rock']
            if (beatsPaper.includes(computerChoice)){
                computerWins();
                }
                else{
                    userWins();
                }            
        else{  
            // User Spock
            if (userChoice === 'spock'){
            const beatsLizard = ['lizard', 'paper']
            if (beatsPaper.includes(computerChoice)){
                computerWins();
                }
                else{
                    userWins();
                }            
        }
        
    }

});
 







