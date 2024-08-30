/*
Tasks:
 - first check to see if you have first or second player selected and if neither is selected then do nothing
 - if one player is selected then enableBot variable with be set to to true (default is false)
 - if either are selected then hide modal and undo inability to interact with cards

 - when modal is hidden do this:
    run resetGame then
    Player score text should be Player 2 if two players is selected and if they arent selected then it should read Computer Score

init library stuff:
    onePlayerIsSelected - default: false
    twoPlayersIsSelected - default: false
    onBeginPress = function - default: undefined
    enableComputer - default: false;
    canInteractWithGame - default: false;
    startGame.hide - function
    playerTwoText - default = "[Undefined]"
    resetGame - function
*/