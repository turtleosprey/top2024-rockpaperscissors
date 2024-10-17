console.groupCollapsed('Open me for a surprise!');
console.log(`Shout Out to The Odin Project!`);
console.log(`Shout Out to \`me\` for showing up!`);
console.groupEnd;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(decision){
  var number = Math.random();
  
  number <= .33 
  ? decision = `rock` 
  : number <= .66
  ? decision = `paper`
  : decision = `scissors`

  return decision
};
getComputerChoice();

function getHumanChoice(decision){
  decision = window.prompt(`Choose: Rock, Paper, Scissors`).toLocaleLowerCase();
  return decision;
};
getHumanChoice();