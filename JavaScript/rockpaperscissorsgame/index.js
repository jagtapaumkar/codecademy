const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors"|| userInput === 'bomb'){
    return userInput;
  } else{
    console.log("Choose a  valid input")
  }
}
 const getComputerChoice = () => {
 const randomNumbers= Math.floor(Math.random()*3);
switch(randomNumbers){
  case 0:
  return 'rock';
  case 1:
  return 'paper';
  case 2:
  return 'scissors';
}
};

determineWinner =(userChoice,computerChoice) =>{
  if (userChoice === computerChoice){
    return 'This game is a tie!';
  }
  if(userChoice === 'rock'){
    if(computerChoice=== 'paper'){
      return 'Sorry Computer won!'
    }else {
      return 'Congratulation you won!'
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice=== 'scissors'){
      return 'Sorry Computer won!'
    }else {
      return 'Congratulation you won!'
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice=== 'rock'){
      return 'Sorry Computer won!'
    }else {
      return 'Congratulation you won!'
    }
  }
  if(userChoice === 'bomb'){
      return 'Congratulation you won!'
    
  }
};

const playGame = ()=>{
  const userChoice =getUserChoice('scissors');
  const computerChoice=getComputerChoice();
  console.log('You threw:' + userChoice);
  console.log('Computer threw:' + computerChoice);

  console.log(determineWinner(userChoice,computerChoice));
};

playGame();
