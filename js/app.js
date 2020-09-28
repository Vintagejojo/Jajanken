// What in the world is this foolishness

let userChosen
let computerChosen
let outcome;
const displayResult = document.getElementById('result');
const computerChoice = document.getElementById('computer-choice');
let randomNumber = Math.floor((Math.random() * 3) +1);

console.log(randomNumber + " is the random");
const userChoice = document.getElementById('user-choice');
const possibleChoices = document.querySelectorAll(".choices");



//user chosen mods
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    console.log(e.target.id)
    userChosen = e.target.id
    generatedComputerChoice()
    results();
    userChoice.innerHTML = userChosen;
    computerChoice.innerHTML = computerChosen;
    displayResult.innerHTML = outcome;
}))


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
    }   else if (computerChosen === 'rock' && userChosen === 'paper') {
         outcome = "You win! Paper covers rock."
    }   else if (computerChosen === 'rock' && userChosen === 'scissors'){
         outcome = " You lost!, rock beats scissors."
    }   else if (computerChosen === 'paper' && userChosen === 'rock') {
         outcome = "You lost! Rock covers paper."
    }   else if (computerChosen === 'paper' && userChosen === 'scissors'){
         outcome = "You win! Scissors cuts paper."
    }   else if (computerChosen === 'scissors' && userChosen === 'rock'){
         outcome = "You win! Rock clobbers scissors."
    }   else if (computerChosen === 'scissors' && userChosen === 'paper') {
         outcome = "You lose! Scissors slices paper."
    }
    return outcome;
}

function generateRandom() {
    return Math.floor((Math.random() * 3) +1);
}
console.log("I am the generated random ==", generateRandom())