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

//on button click, play game
let playerChoiceBtn = document.querySelector("#choice");

playerChoiceBtn.addEventListener('click', (event) => {
    let target = event.target;
    
    switch (target.id) {
        case 'Rock':
            playRound('rock');
            break;
        case 'Paper':
            playRound('paper');
            break;
        case 'Scissors':
            playRound('scissors');
            break;
    }
});
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    computerChoice = getComputerChoice();

    let log = document.querySelector("#log");

    console.log("play round called")


    if ((humanChoice=="rock"&&computerChoice=="scissors")||(humanChoice=="paper"&&computerChoice=="rock")||(humanChoice=="scissors"&&computerChoice=="paper")){
        humanScore++;
        console.log(`Human wins with ${humanChoice} vs ${computerChoice}`);
        log.textContent += `Human wins with ${humanChoice} vs ${computerChoice}`;
    } else if ((humanChoice=="rock"&&computerChoice=="paper")||(humanChoice=="scissors"&&computerChoice=="rock")||(humanChoice=="paper"&&computerChoice=="scissors")){
        computerScore++;
        console.log(`Computer wins with ${computerChoice} vs ${humanChoice}`);
        log.textContent += `Computer wins with ${computerChoice} vs ${humanChoice}`;
    } else if (humanChoice==computerChoice) {
        console.log(`Draw with ${computerChoice} vs ${humanChoice}`);
        log.textContent += `Draw with ${computerChoice} vs ${humanChoice}`;
    } else {
        console.log(humanChoice + " " + computerChoice + " " + "Invalid entry, enter rock, paper or scissors");
        log.textContent += humanChoice + " " + computerChoice + " " + "Invalid entry, enter rock, paper or scissors"
    }

    return humanScore, computerScore;
}