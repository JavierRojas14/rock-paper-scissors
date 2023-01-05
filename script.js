function getComputerChoice() {
    const decisions = ['rock', 'paper', 'scissors'];
    let randomIndex = getIndexToChoose(decisions);
    let randomChoice = decisions[randomIndex]

    return randomChoice

}

function getIndexToChoose(array) {
    let index = Math.floor(Math.random() * array.length);
    return index
}


function playRound(event) {
    const playerSelectionLower = event.target.classList.value;
    const computerSelectionLower = getComputerChoice();

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
    let playerSelection = prompt('What is your choice?');
    let result = playRound(playerSelection, getComputerChoice());
    console.log(result);
}


//  game();

// Primero se seleccciona la opcion del jugador. Esto se hace con un event listener.
// O sea, cada vez que se clickee un boton, se tiene que obtener la decision del jugador
// 1. Agregar event listeners a los botones
// 2. Cada vez que se clickee un boton llamar a la funcion playRound
// 3. La seleccion del jugador va a ser la classList.value del jugador
// 4. La seleccion de la maquina se obtiene con la funcion getComputerChoice()

const decisionsNodes = document.querySelectorAll('button');
decisionsNodes.forEach(button => {
    button.addEventListener('click', playRound)
});