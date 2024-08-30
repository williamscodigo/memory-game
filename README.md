## ui stuff
    make it look pretty with tailwind

## init: init.js
    Do the ui integration or declare the following values

    onePlayerIsSelected - default: false
    twoPlayersIsSelected - default: false
    onBeginPress = function - default: undefined
    enableComputer - default: false;
    canInteractWithGame - default: false;
    startGame.hide - function
    playerTwoText - default = "[Undefined]"
    resetGame - function

    pressCard.add((cardObject)=> {logic}) - function
    gameLoop.add - function
    flipCard(cardObject) - function
    cardObject.completed - boolean - default: false
    Players - array
    flippedCards - array
    currentPlayer - 0 or 1

    players - object
    startGame.modify(player1Score, player2Score, whichPlayerWon = "First Player" | "Second Player" | "Computer") - function
    startGame.show

## computer ai: computer.js
    yet to be decided

## modal popup stuff: begin-button.js

this is the first thing that you see

make sure cards in the background cant be clicked while this popup is showing

when you click the begin button:
    first check to see if you have first or second player selected and if neither is selected then do nothing
    if one player is selected then enableBot variable with be set to to true (default is false)
    if either are selected then hide modal and undo inability to interact with cards


## starting game: begin-button.js

all cards should be face down

Player score text should be Player 2 if two players is selected and if they arent selected then it should read Computer Score



## interacting with game: playing.js

when you click on a card then that card gets flipped


when you flip a card the card gets flipped
 if that happens and there are two cards selected that are then the current player gets +1 score and cards remain flipped up with some distinction between old flipped cards and newly flipped cards
 if not both cards get flipped down and it becomes the other players turn (BUT only after a player failed to make a match)
 
 ## ending game: ending-game.js

if all cards are face up then the game has ended

when the game has ended then show an alternated version of the begining modal
that shows who won the game and what the final score was

