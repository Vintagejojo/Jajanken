//  Get Results 
function results() {
     if (computerChosen === userChosen) {
          outcome = "It is a Tie, my friend";
     } else if (computerChosen === 'rock' && userChosen === 'paper') {
          outcome = "You win! Paper covers rock.";
     } else if (computerChosen === 'rock' && userChosen === 'scissors') {
          outcome = " You lost! rock beats scissors.";
     } else if (computerChosen === 'paper' && userChosen === 'rock') {
          outcome = "You lost! Rock covers paper.";
     } else if (computerChosen === 'paper' && userChosen === 'scissors') {
          outcome = "You win! Scissors cuts paper.";
     } else if (computerChosen === 'scissors' && userChosen === 'rock') {
          outcome = "You win! Rock clobbers scissors.";
     } else if (computerChosen === 'scissors' && userChosen === 'paper') {
          outcome = "You lose! Scissors slices paper.";
     }
     return outcome;
}
