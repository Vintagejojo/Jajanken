// What in the world is this foolishness

let userChosen
let computerChosen
var result = results()
const displayResult = document.getElementById('result');
const computerChoice = document.getElementById('computer-choice');
const randomNumber = Math.floor ((Math.random () * 3) +1);
const userChoice = document.getElementById('user-choice');
const possibleChoices = document.querySelectorAll(.choices);

//user chosen mods
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChosen = e.target.id
    generatedComputerChoice()
    results()
    userChoice.innerHTML = userChosen
    computerChoice.innerHTML = computerChosen
    displayResult.innerHTML = result
}))


//computer choice randomizer below
function generatedComputerChoice(){
    if (randomNumber === 1){
        return computerChosen === 'rock'
    } else if (randomNumber === 2){
        return computerChosen === 'paper'
    } else if (randomNumber === 3){
        return computerChosen = 'scissors'
    }
}

//  Get Results 
function result() {
    if (computerChosen === userChosen) {
        return result = "It is a Tie, my friend"
    }   else if (computerChosen === 'rock' && userChosen === 'paper') {
        return result = "You win! Paper covers rock."
    }   else if (computerChosen === 'rock' && userChosen === 'scissors'){
        return result = " You lost!, rock beats scissors."
    }   else if (computerChosen === 'paper' && userChosen === 'rock'){
        return result = "You lost! Rock covers paper."
    }   else if (computerChosen === 'paper' && userChosen === 'scissors'){
        return result = "You win! Scissors cuts paper."
    }   else if (computerChosen === 'scissors' && userChosen === 'rock'){
        return result = "You win! Rock clobbers scissors."
    }   else if (computerChosen === 'scissors' && userChosen === 'paper'){
        return result = "You lose! Scissors slices paper."
    }
}