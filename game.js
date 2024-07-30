function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    return Math.floor(Math.random() * (maxFloored-minCeiled) + minCeiled);
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");

}

function playGame() {
    const humanScore = 0;
    const computerScore = 0;

    getComputerChoice();
    getHumanChoice();

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice=="rock"&&computerChoice=="scissors")||(humanChoice=="paper"&&computerChoice=="rock")||(humanChoice=="scissors"&&computerChoice=="paper")){
            humanScore++;
            console.log(`Human wins with ${humanChoice} vs ${computerChoice}`);
        } else if ((humanChoice=="rock"&&computerChoice=="paper")||(humanChoice=="scissors"&&computerChoice=="rock")||(humanChoice=="paper"&&computerChoice=="scissors")){
            computerScore++;
            console.log(`Computer wins with ${computerChoice} vs ${humanChoice}`);
        } else if (humanChoice==computerChoice) {
            console.log(`Draw with ${computerChoice} vs ${humanChoice}`);
        } else {
            console.log("Invalid entry, enter rock, paper or scissors");
            getHumanChoice();
        }
        return humanScore, computerScore;
    }

    for (let i=0; i<6;i++) {
            playRound();
            getComputerChoice();
            getHumanChoice();
    }

    if (humanScore > computerScore) {
            console.log("Human wins")
    } else {
            console.log("Computer wins")
    }
}

playGame()
