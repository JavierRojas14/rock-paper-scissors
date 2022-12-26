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

// let choice = getComputerChoice();
// console.log(choice);