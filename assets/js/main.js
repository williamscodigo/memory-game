//ref main element
const $main = document.querySelector('main');

renderUI(modalHTML);

$main.addEventListener('submit', startGameForm);

function startGameForm(e){
    e.preventDefault();

    //TODO: grab option value (should control game logic)

    //call function to start game logic loop 
    gameLoop(/*game-mode*/);
}

//TODO: Game Logic Code / example

function gameLoop(/*game-mode*/) {
/////////////////////////////////////////////////////////////////

// if(){

// }else{

// }

//re-renderUI
renderUI(gameHTML);

////////////////////////////////////////////////////////////////
}

//utility function to render ui
function renderUI(stringHTML){
  $main.innerHTML = stringHTML;
}
