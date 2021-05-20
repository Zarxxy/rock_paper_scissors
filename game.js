const result = document.querySelector("#result");
const resultText  = document.createElement("p");

const score = document.querySelector("#score");
const scoreText = document.createElement("p");

let computerScore = 0
let playerScore = 0


const btnRock = document.querySelector(".btnRock")
btnRock.addEventListener("click", () => {
    round("rock", computerPlay());
} );

const btnPaper = document.querySelector(".btnPaper")
btnPaper.addEventListener("click", () => {
    round("paper", computerPlay());
} );

const btnScissors= document.querySelector(".btnScissors")
btnScissors.addEventListener("click", () => {
    round("scissors", computerPlay());
} );

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

function round(player, computer) {
    if (computer == "scissors" && player == "paper") {
        resultText.textContent = "You lose! :(";
        result.appendChild(resultText);
        computerScore++;
    } else if (player == "scissors" && computer == "paper") {
        resultText.textContent = "You win! :)";
        result.appendChild(resultText);
        playerScore++;
    } else if (computer == "paper" && player == "rock") {
        resultText.textContent = "You lose! :(";
        result.appendChild(resultText);
        computerScore++;
    } else if (player == "paper" && computer == "rock") {
        resultText.textContent = "You win! :)";
        result.appendChild(resultText);
        playerScore++;
    } else if (computer == "rock" && player == "scissors") {
        resultText.textContent = "You lose! :(";
        result.appendChild(resultText);
        computerScore++;
    } else if (player == "rock" && computer == "scissors") {
        resultText.textContent = "You win! :)";
        result.appendChild(resultText);
        playerScore++;
    } else {
        resultText.textContent = "Draft";
        result.appendChild(resultText);
    }    
    game()
}

function game(){
    if (playerScore == 5) {
        alert("You won against the Computer!!!")
        playerScore = 0
        computerScore = 0        
    } else if (computerScore == 5) {
        alert("Game Over! You lost against the Computer ;(")
        playerScore = 0
        computerScore = 0  
    } else {
        scoreText.textContent = "Player: " + playerScore + " Computer: " + computerScore;
        score.appendChild(scoreText);
    }
}