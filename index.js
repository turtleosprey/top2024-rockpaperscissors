console.groupCollapsed('Open me for a surprise!');
console.log(`Shout Out to The Odin Project!`);
console.log(`Shout Out to \`me\` for showing up!`);
console.groupEnd();

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(computerChoice){
  var number = Math.random();
  
  number <= .33 
  ? computerChoice = `rock` 
  : number <= .66
  ? computerChoice = `paper`
  : computerChoice = `scissors`

  console.log(`Computer Choiuce: ${computerChoice}`);
  return computerChoice
};

function getHumanChoice(humanChoice){
  humanChoice = window.prompt(`Choose: Rock, Paper, Scissors`).toLocaleLowerCase();
  
  console.log(`Human Choice: ${humanChoice}`);
  return humanChoice;
};

function playRound(humanChoice, computerChoice){
  var winMessage = (humanChoice, computerChoice) => {
    console.log(`${humanChoice} beats ${computerChoice}. You win`);
    humanScore++;
    console.log(`Human Score: ${humanScore}`);
  };
  var loseMessage = (humanChoice, computerChoice) => {
    console.log(`${computerChoice} beats ${humanChoice}. You lose`);
    computerScore++;
    console.log(`Computer Score: ${computerScore}`);
  };

  humanChoice === computerChoice
  ? console.log(`${computerChoice} is the same as ${humanChoice}. It's a tie!`)
  : humanChoice === `rock` && computerChoice === `paper` 
    || humanChoice === `scissors` && computerChoice === `rock` 
    || humanChoice === `paper` && computerChoice === `scissors`
  ? loseMessage(humanChoice, computerChoice)

  : humanChoice === `paper` && computerChoice === `rock` 
    || humanChoice === `rock` && computerChoice === `scissors` 
    || humanChoice === `scissors` && computerChoice === `paper`
  ? winMessage(humanChoice, computerChoice)
  : console.log(`Possibilities ran out`)
  
};

function playGame(){
  for (i = 0; i <= 5; i++){
    const HUMANdDECISION = getHumanChoice();
    const COMPUTERDECISION = getComputerChoice();

    console.log(`Round: ${i}`);

    playRound(HUMANdDECISION, COMPUTERDECISION);
  }
}

playGame();