function getComputerChoice() {
    console.log("Generating computer's choice")
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    const calc = Math.floor(Math.random() * (maxFloored-minCeiled) + minCeiled)
    if (calc==1) {
        return "rock";
    } else if (calc==2) {
        return "paper";
    } else if (calc==3) {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    console.log("Human choice received")
    return choice;
}

function playGame() {
    console.log("Play game initiated")
    let humanScore = 0;
    let computerScore = 0;
    
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
            console.log(humanChoice + " " + computerChoice + " " + "Invalid entry, enter rock, paper or scissors");
        }
        return humanScore, computerScore;
    }

    for (let i=0; i<4;i++) {
        console.log("Round " + i + "/5");
            let computerChoice = getComputerChoice();
            let humanChoice = getHumanChoice();
            playRound(humanChoice, computerChoice);

    }

    if (humanScore > computerScore) {
            console.log("Human wins with a score of " + humanScore + " versus " + computerScore);
    } else {
            console.log("Computer wins with a score of " + computerScore + " versus " + humanScore);
    }
}

playGame()
