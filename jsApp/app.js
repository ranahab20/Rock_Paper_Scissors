
let humanChoice;
let computerChoice;

function getComputerChoice(){
    let result=Math.floor(Math.random()*3);
    if(result==0){
        console.log("paper");
        return "paper";
    }
     else if(result==1){
        console.log("rock")
        return "Rock";
    }
    else{
        console.log("Scissors")
        return "Scissors";
    }
}


function getHumanChoice(){
   return prompt("enter:rock,paper or scissor");
}

function playGame(){
    let humanScore=0;
    let computerScore=0;
    function playRound(humanChoice,computerChoice){
    humanChoice=humanChoice.toLowerCase();
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
for(let count=0;count<5;count++){
    const humanSelection=getHumanChoice();
    const computerSelection=getComputerChoice();
    playRound(humanSelection,computerSelection);
}
if(computerScore>humanScore){
    console.log("computer wins")
}
else{
    console.log("you win")
}

}
playGame();


