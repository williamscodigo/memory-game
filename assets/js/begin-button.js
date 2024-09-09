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


localStorage.dontPopUpFirstLoadIn === "true" && startGame.hide();
localStorage.dontPopUpFirstLoadIn = false;

player2Text = localStorage.player2Text;
players[1].score = 0;

const optionsMessageEl = $('#options-message');
const msg = 'Choose an option: One Player or Two Players!';
optionsMessageEl.textContent = ''; //set initial msg to empty


//set styles on initial currentPlayer - scores
currentPlayer === 0 ? $('#score').classList.add('current-turn') : $('#score2').classList.add('current-turn')

addBeginPress(() => {


    if(twoPlayersIsSelected) {
       // resetGame();
       optionsMessageEl.textContent = ''; //set msg to empty
       localStorage.player2Text = player2Text = 'Player 2'; 
        players[0].score = 0; //set player1 initial score
        players[1].score = 0; //set player2 initial score
        canInteractWithGame = true;
        startGame.hide();
    }else if(onePlayerIsSelected){
       // resetGame();
       optionsMessageEl.textContent = ''; //set msg to empty
       localStorage.player2Text = player2Text = 'Computer';
        enableComputer = true;
        players[0].score = 0; //set player1 initial score
        players[1].score = 0; //set player2 initial score
        canInteractWithGame = true;
        startGame.hide();
        if (currentPlayer) computerTurn()
    }else{
        //no radio button option selected!
        //change this to show message on ui instead of console window
        optionsMessageEl.textContent = msg;
        return;
    }
    gameHasBeenPlayed && (localStorage.dontPopUpFirstLoadIn = true,
    location.reload());
})
