console.groupCollapsed('Open me for a surprise!');
console.log(`Shout Out to The Odin Project!`);
console.log(`Shout Out to \`me\` for showing up!`);
console.groupEnd;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(computerChoice){
  var number = Math.random();
  
  number <= .33 
  ? computerChoice = `rock` 
  : number <= .66
  ? computerChoice = `paper`
  : computerChoice = `scissors`

  return computerChoice
};
getComputerChoice();

function getHumanChoice(humanChoice){
  humanChoice = window.prompt(`Choose: Rock, Paper, Scissors`).toLocaleLowerCase();
  return humanChoice;
};
getHumanChoice();

function playRound(humanChoice, computerChoice){

};