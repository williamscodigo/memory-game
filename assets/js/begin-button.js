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
    addBeginPress(func) - function 
    enableComputer - default: false;
    canInteractWithGame - default: false;
    startGame.hide - function
    player2Text - default: "[Undefined]"
    resetGame - function
*/

//comment this when working on this file
// startGame.hide();

addBeginPress(() => {
    if(twoPlayersIsSelected) {
       // resetGame();
        player2Text = 'Player 2'; 
        players[1].score = 0; //set player2 initial score
        canInteractWithGame = true;
        startGame.hide();
    }else if(onePlayerIsSelected){
       // resetGame();
        player2Text = 'Computer';
        enableComputer = true;
        players[1].score = 0; //set player2 initial score
        canInteractWithGame = true;
        startGame.hide();
    }else{
        //no radio button option selected!
        console.log('ui: must choose and option: one player or two players');
        return;
    }
})
