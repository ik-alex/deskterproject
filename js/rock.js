function playRound(playerSelection, computerSelection) {
  // selection process!
  if((playerSelection==='Rock' && computerSelection==='scissors') || (playerSelection==='paper' && computerSelection==='Rock') || (playerSelection==='scissors' && computerSelection==='paper')){
    str = `You win! ${playerSelection} beats ${computerSelection}`;
    return str;
  }else if(playerSelection===computerSelection){
    str = `it's a tie`;
    return str;
  } else {
    str = `you lose! ${computerSelection} beats ${playerSelection}`;
    return str;
  }
}

function computerPlay() {
  let outcome = ['rock','paper','scissors'];
  let randomItem = outcome[Math.floor(Math.random()*outcome.length)];
  return randomItem;
}

function game(){
  for(i=0; i<=5; i++){
    console.log(round());
  }
}

function round(){
  var playerInput = prompt("player choose an item", " ");
  var playerSelection = playerInput;
  let computerSelection = computerPlay();
  console.log(`computer played: ${computerPlay()} and player Played: ${playerSelection}.`);
  console.log(playRound(playerSelection, computerSelection));
}
// let playerInput = prompt('player choose an item', '');
// let playerSelection = playerInput;
// let computerSelection = computerPlay();
// console.log(`computer played: ${computerPlay()} and player Played: ${playerSelection}.`);
// console.log(playRound(playerSelection, computerSelection));
console.log(game());