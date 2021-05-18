
function computerPlay() {

    let getRandomInt = Math.floor(Math.random() * 3);
    
    if(getRandomInt == 0) {
        return "paper";
    } else if (getRandomInt == 1) {
        return "rock";
    } else {
        return "scissors";
    }
}

function playerSelection() {
    
    let playerSelection = prompt("Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}


function round(computer, player) {

    if (computer == "scissors" && player == "paper") {
        return "You lose! :(";
    } else if (player == "scissors" && computer == "paper") {
        return "You win! :)";
    } else if (computer == "paper" && player == "rock") {
        return "You lose! :(";
    } else if (player == "paper" && computer == "rock") {
    return "You win! :)";
    } else if (computer == "rock" && player == "scissors") {
        return "You lose! :(";
    } else if (player == "rock" && computer == "scissors") {
        return "You win! :)";
    } else {
        return "Draft!";
    }
}


function game() {
    let i;
    for (i = 1; i <= 5; i++) {

        console.log(round(playerSelection(),computerPlay()));
        console.log("Round " + i)
        
    }
}

game();