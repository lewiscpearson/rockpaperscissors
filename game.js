function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    return Math.floor(Math.random() * (maxFloored-minCeiled) + minCeiled);
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?")

}

