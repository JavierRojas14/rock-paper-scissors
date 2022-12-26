function getComputerChoice() {
    const decisions = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = getIndexToChoose(decisions);
    let randomChoice = decisions[randomIndex]

    return randomChoice

}

function getIndexToChoose(array) {
    let index = Math.floor(Math.random() * array.length);
    return index
}


function playRound(playerSelection, computerSelection) {
    let playerSelectionLower = playerSelection.toLowerCase();
    let computerSelectionLower = computerSelection.toLowerCase();

    if (playerSelectionLower === 'rock') {
        if (computerSelectionLower === 'rock') {
            result = "Well, that's a draw";

        } else if (computerSelectionLower === 'paper') {
            result = 'You Lose! Paper beats Rock';

        } else if (computerSelectionLower === 'scissors') {
            result = 'You Win! Rock beats Scissors';

        }

    } else if (playerSelectionLower === 'paper') {
        if (computerSelectionLower === 'rock') {
            result = 'You Win! Paper beats Rock';

        } else if (computerSelectionLower === 'paper') {
            result = "Well, that's a draw";

        } else if (computerSelectionLower === 'scissors') {
            result = 'You Lose! Scissors beats Paper';
        }

    } else if ((playerSelectionLower === 'scissors')) {
        if (computerSelectionLower === 'rock') {
            result = 'You Lose! Rock beats Scissors';

        } else if (computerSelectionLower === 'paper') {
            result = 'You Win! Scissors beats Paper';

        } else if (computerSelectionLower === 'scissors') {
            result = "Well, that's a draw";
        }

    } else {
        result = 'Sorry, that is not a valid option';
    }

    return result
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('What is your choice?');
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
    }
}

game();