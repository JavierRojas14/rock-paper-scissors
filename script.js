function getComputerChoice() {
    const decisions = ["rock", "paper", "scissors"];
    let randomIndex = getIndexToChoose(decisions);
    let randomChoice = decisions[randomIndex];

    return randomChoice;
}

function getIndexToChoose(array) {
    let index = Math.floor(Math.random() * array.length);
    return index;
}

function decideWinnerOfRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            result = "Well, that's a draw";
        } else if (computerSelection === "paper") {
            result = "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            result = "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "You Win! Paper beats Rock";
        } else if (computerSelection === "paper") {
            result = "Well, that's a draw";
        } else if (computerSelection === "scissors") {
            result = "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "You Lose! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            result = "You Win! Scissors beats Paper";
        } else if (computerSelection === "scissors") {
            result = "Well, that's a draw";
        }
    } else {
        result = "Sorry, that is not a valid option";
    }

    return result;
}

function showResult(result) {
    const resultBox = document.querySelector("div.results");
    resultBox.textContent = result;
}

function sumScore(result) {
    const userScoreNode = document.querySelector("span.user-score");
    const machineScoreNode = document.querySelector("span.computer-score");

    if (result.includes('Win')) {
        let actualUserScore = Number(userScoreNode.textContent);
        userScoreNode.textContent = actualUserScore + 1;

    } else if (result.includes('Lose')) {
        let actualMachineScore = Number(machineScoreNode.textContent);
        machineScoreNode.textContent = actualMachineScore + 1;

    } 

}

function decideWinner() {
    const userScoreNode = document.querySelector("span.user-score");
    const machineScoreNode = document.querySelector("span.computer-score");

    let userScore = Number(userScoreNode.textContent);
    let machineScore = Number(machineScoreNode.textContent);

    if (userScore === 5) {
        alert("You're the winner!");
    } else if (machineScore === 5) {
        alert("You lose, the machine is the winner")
    }
}

function playRound(event) {
    const playerSelection = event.target.classList.value;
    const computerSelection = getComputerChoice();

    let result = decideWinnerOfRound(playerSelection, computerSelection);
    showResult(result);
    sumScore(result);
    decideWinner();
}



const decisionsNodes = document.querySelectorAll("button");
decisionsNodes.forEach((button) => {
    button.addEventListener("click", playRound);
});
