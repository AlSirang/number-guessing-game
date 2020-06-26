let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// will generate the new secret target number
const generateTarget =()=>{
    return Math.floor(Math.random()*10);
};

// will return nearest absolute distance b/w two points
const absoluteDistance = (guess, target) => Math.abs(target-guess);


// determines the winner
const compareGuesses =(userGuess, computerGuess, targetNumber)=>{

    userGuess = absoluteDistance(userGuess,targetNumber);
    computerGuess = absoluteDistance(computerGuess, targetNumber);

    if(userGuess <= computerGuess){
        return true;
    }

    return false;
};

// will increase the winner's score
const updateScore=(winner)=>{
    if (winner === 'human'){
        humanScore +=1;
    }
    else//winner=== 'computer'
    {
        computerScore +=1;
    }
    
};

// will update the round number after each round
const advanceRound =()=>{
    currentRoundNumber +=1;
};