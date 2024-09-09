/*
 - Tasks:
if all cards are face up then the game has ended
when the game has ended then show an alternated version of the begining modal
that shows who won the game and what the final score was in startGame modal

 - init library stuff:

players - object
startGame.modify(player1Score, player2Score, whichPlayerWon = "First Player" | "Second Player" | "Computer") - function
startGame.show
*/
// Function to handle the end of the game

const gameHasEnded = function () {

    //this function will be executed elsewhere but do the stuff above here
    startGame.show()
    startGame.modify(players[0].score, players[1].score, determineWinnerMessage())

    //game was not interactive after first playthrough
    //this was the easiest solution i can think of at the momment
    //display winner message for 5 seconds than reload pg
    setTimeout(() => location.reload(), 5000);
}

function determineWinnerMessage() {
    
    if(players[0].score>players[1].score){
        return "Congratulations! First Player";
    }else if(players[0].score<players[1].score){
       return enableComputer ? "Ops!! Computer":"Contratulations! Second Player";
    }else{
        return "Its A Draw!! No One"
    }
}

// function gameHasEnded() {
//     // Display a message to the user with an option to play again
//     setTimeout(() => {
//       if (confirm("Congratulations! You've matched all the cards. Do you want to play again?")) {
//         resetGame();
//       }
//     }, 500); // Slight delay to allow the final match animation
//   }
  
//   // Function to reset the game and start again
//   function resetGame() {
//     // Reset all variables and the game board
//     matches = 0;
  
//     // Shuffle cards (add shuffle logic if needed)
//     shuffleCards();
  
//     // Flip all cards back
//     cards.forEach(card => {
//       card.classList.remove('flip');
//       card.addEventListener('click', flipCard); // Re-enable the click event listener
//     });
//   }