
let humanChoice;
let computerChoice;

function getComputerChoice(){
    let result=Math.floor(Math.random()*3);
    if(result==0){
        console.log("paper");
        return"paper";
    }
    else if(result==1){
        console.log("rock");
        return "rock";
    }
    else{
        console.log("Scissors");
        return "scissors";
    }
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    if (humanChoice=="paper"&& computerChoice=="rock"||humanChoice=="rock"&& computerChoice=="scissors"||humanChoice=="scissors"&& computerChoice=="paper"){
        humanScore++;
        return "you win";
    }
    else if(humanChoice==computerChoice){
        return "equal";
    }
    else{
        computerScore++;
        return"you lose";
    }
}
function playGame(humanChoice){
    const computerChoice=getComputerChoice();
    playRound(humanChoice,computerChoice);
    

    if(computerScore>humanScore){
    result.textContent=`Human ${humanScore} | Computer ${computerScore}`;
    compChoice.textContent=`computer choice is: ${computerChoice}, you: ${humanChoice}`;

}
else if(computerScore<humanScore){
    result.textContent=` Human ${humanScore} | Computer ${computerScore}`;
    compChoice.textContent=`computer choice is: ${computerChoice}, you: ${humanChoice}`;

}
else{
        result.textContent=` Human ${humanScore} | Computer ${computerScore}`;
        compChoice.textContent=`computer choice is: ${computerChoice}, you: ${humanChoice}`;

}
if (humanScore === 5) { result.textContent = `Final Score → Human ${humanScore} | Computer ${computerScore}`; compChoice.textContent = "🎉 You reached 5 points!"; announceWinner("You"); } 
else if (computerScore === 5) { result.textContent = `Final Score → Human ${humanScore} | Computer ${computerScore}`; compChoice.textContent = "💻 Computer reached 5 points!"; announceWinner("Computer"); } 
}
function announceWinner(winner) 
{ const winnerDiv = document.createElement("div"); winnerDiv.classList.add("winner"); winnerDiv.textContent = `The winner is: ${winner}`; container.appendChild(winnerDiv);
}



const body=document.querySelector("body")

const container=document.createElement("div");
container.classList.add("container");

const buttons=document.createElement("div");

const result=document.createElement("div");
result.classList.add("result");
container.appendChild(result);

const compChoice=document.createElement("div");

container.appendChild(compChoice);

const buttonLabels=["rock","paper","scissors"];
buttonLabels.forEach(label=>{
    const button=document.createElement("button");
    button.classList.add("btn");
    buttons.appendChild(button);
    button.textContent = label;

    button.addEventListener("click",()=>playGame(label));
});

container.appendChild(buttons);
body.appendChild(container);




