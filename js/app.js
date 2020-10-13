// What in the world is this foolishness
let userChosen
let computerChosen
let outcome;
const displayResult = document.getElementById('result');
const computerChoice = document.getElementById('computer-choice');
let randomNumber = Math.floor((Math.random() * 3) +1);
let matchCount = 0;

console.log(randomNumber + " is the random");
const userChoice = document.getElementById('user-choice');
const possibleChoices = document.querySelectorAll(".choices");
const playerScore = document.querySelector('#score_points');


// player and computer score below
let computerWins = 0;
let playerWins = 0;
let draws = 0;
let percentageWins = 0;

//! I see the issue
let winPercentage =  function () {
 percentageWins = (playerWins / (computerWins + playerWins + draws)) * 100;
 //#^^^^ this made sense.   It was just being calculate at line 18 where all the other variables were only 0.  So your original declaration would have been 0 / 0  ... i.e undefined.  Make sense?
percentageWins = percentageWins.toFixed(2) //round to 2;
return percentageWins; 
}


//user chosen mods
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    console.log(e.target.id)
    userChosen = e.target.id
    generatedComputerChoice()
    results();
    winPercentage(); //# I called the winpercentage function here. 
    userChoice.innerHTML = userChosen;
    computerChoice.innerHTML = computerChosen;
    displayResult.innerHTML = outcome;
    playerScore.innerHTML = `${percentageWins}%`;
}))

console.log(percentageWins);

//computer choice randomizer below
function generatedComputerChoice() {
    console.log('fired')
    if (generateRandom() === 1) {
         computerChosen = 'rock'
    } else if (generateRandom() === 2) {
        computerChosen = 'paper'
    } else if (generateRandom() === 3) {
         computerChosen = 'scissors'
    }
}

//  Get Results 
function results() {
    if (computerChosen === userChosen) {
        outcome = "It is a Tie, my friend"
        console.log(`This is the current score: ${percentageWins}% `)
        console.log("Draws: ", draws++ );
    }   else if (computerChosen === 'rock' && userChosen === 'paper') {
         outcome = "You win! Paper covers rock."
         playerWins++;
         console.log(`Player: ${playerWins}, Computer: ${computerWins}, This is the current score: ${percentageWins}%`);
    }   else if (computerChosen === 'rock' && userChosen === 'scissors'){
         outcome = " You lost! rock beats scissors."
         computerWins++;
         console.log(`Player ${playerWins}, Computer ${computerWins}, This is the current score: ${percentageWins}%`);
    }   else if (computerChosen === 'paper' && userChosen === 'rock') {
         outcome = "You lost! Rock covers paper."
         computerWins++;
         console.log(`Player: ${playerWins}, Computer: ${computerWins}, This is the current score: ${percentageWins}%`);
    }   else if (computerChosen === 'paper' && userChosen === 'scissors'){
         outcome = "You win! Scissors cuts paper."
         playerWins++;
         console.log(`Player: ${playerWins}, Computer: ${computerWins}, This is the current score: ${percentageWins}%`);
    }   else if (computerChosen === 'scissors' && userChosen === 'rock'){
         outcome = "You win! Rock clobbers scissors."
         playerWins++;
         console.log(`Player: ${playerWins}, Computer: ${computerWins}, This is the current score: ${percentageWins}%`);
    }   else if (computerChosen === 'scissors' && userChosen === 'paper') {
         outcome = "You lose! Scissors slices paper."
         computerWins++;
console.log(`This is the current score: ${percentageWins}%`);
         console.log(`Player: ${playerWins}, Computer: ${computerWins}, This is the current score: ${percentageWins}% `);
    }
    return outcome;
}


// gotta keep checkin on these stats
console.log(`This is the current score: ${percentageWins}%`);
// code below should make it pop up on the dom.



// Function below should control the random selections......as best as I can muster rn
function generateRandom() {
    return Math.floor((Math.random() * 3) +1);
}





console.log("I am the generated random ==", generateRandom())


