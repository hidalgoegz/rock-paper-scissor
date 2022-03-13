const lossesTo = {
  'scissors': ['spock', 'rock'],
  'paper': ['lizard', 'scissors'],
  'rock': ['spock', 'paper'],
  'lizard': ['rock', 'scissors'],
  'spock': ['lizard', 'paper'],
};

const options = Object.keys(lossesTo);

const startMatches = () => {
  let totalPlayerWins = 0;
  let totalComputerWins = 0;
  let totalTies = 0;
  for (let i = 1; i < 6; i++) {
    console.log('------------------------');
    console.log(`Round ${i}:`);
    const result = startMatch();

    if (result === true) {
      totalComputerWins++;
    } else if (result === false) {
      totalPlayerWins++;
    } else {
      totalTies++;
    }

  }
  console.log('------------------------');
  console.log('Results:')
  console.log(`Total player wins: ${totalPlayerWins}`);
  console.log(`Total computer wins: ${totalComputerWins}`);
  console.log(`Total ties: ${totalTies}`);
}


// returns true if player lost
// returns false if player won
// returns 0 if it is a tie
const startMatch = () => {
  const userInput = askForUserInput();

  const computerOption = options[Math.floor(Math.random() * options.length)];
  const result = resolveMatch(userInput.toLowerCase(), computerOption);

  console.log(`Player chooses: ${userInput}, Computer chooses: ${computerOption}`)
  if (result === true) {
    console.log('You lost :( better luck next time');
  } else if (result === false) {
    console.log('You won, YAY!');
  } else {
    console.log('Woops! that\'s a tie');
  }
  return result;
};

const askForUserInput = () => {
  let userInput = prompt(`Is time to play, choose an option between: \r\n ${options}`);

  while (!options.includes(userInput.toLowerCase())) {
    userInput = prompt(`"${userInput}" is not a valid option, come on lets play, choose between: \r\n ${options}`)
  }

  return userInput;
}

// returns true if player lost
// returns false if player won
// returns 0 if it is a tie
const resolveMatch = (player, computer) => {
  if (player === computer) {
    return 0;
  }

  return lossesTo[player].includes(computer);
};
