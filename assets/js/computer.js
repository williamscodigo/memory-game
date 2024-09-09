//dont ask how this works... only God knows now
let firstCardG;
let secondCardG;

computerTurn = function () {
    canInteractWithGame = false;
    const turnLogic = (cardObject) => {
        flipCard(cardObject)
        if(flippedCards.length !== 2) return;
        if(flippedCards[0].name === cardObject.name){
            flippedCards[0].completed = flippedCards[1].completed = true;
            players[currentPlayer].score++;
            completed(flippedCards[0], flippedCards[1])
            if (players[0].score + players[1].score === difficulty) gameHasEnded();
            gameHasBeenPlayed = true;
            setTimeout(() => computerTurn(), 701);
        }else{
            currentPlayer = +!currentPlayer;
            //change current player - score styles
            $('#score').classList.toggle('current-turn')
            $('#score2').classList.toggle('current-turn');  
        }
        

        flipCard(flippedCards[1]);
        flipCard(flippedCards[0]);
    }
    if (!currentPlayer) return;
    //playedCards;
    // console.log(playedCards)
    // console.log(playedCards.map)
    const playedCardsUnique = cardStorage.filter(card => playedCards.map(card => card.index).includes(card.index) && !card.completed && card)
    
    //check if any known card pairs exists
    const uniqueCardNames = [...new Set(playedCardsUnique.map(card=> card.name))]
    const existingPairs = [];
    for (let cardName of uniqueCardNames ) {
        if (playedCardsUnique.filter(card => card.name === cardName).length === 2) existingPairs.push(cardName)
    }
    let turn = "" 
    for (cardName of existingPairs) {
        if (Math.random() * 2 | 0 || playedCardsUnique.length === difficulty * 2) {
            turn = cardName;
            break;
        }
    }
    if (turn != "") {
        let cardsToFlip = cardStorage.filter(card => card.name === turn && !card.completed);
        turnLogic(cardsToFlip[0])
        setTimeout(() => turnLogic(cardsToFlip[1]), 700)
        
        return;
    }

    let uniquePlayedIndexes = playedCardsUnique.map(card => card.index)
    let unplayedCards = cardStorage.filter(card => !uniquePlayedIndexes.includes(card.index));
    
    let cardsToFlip2 = cardStorage.filter(card => !card.completed);

    let firstCard = Math.random() * 5 | 0 ? unplayedCards[Math.random()*unplayedCards.length | 0] : cardsToFlip2[Math.random() * cardsToFlip2.length | 0];
    let secondCard;
    if (Math.random() * 4 | 0) {
        secondCard = playedCardsUnique.filter(card => card.name === firstCard.name && card.index !== firstCard.index)[0];
    }
    if (!secondCard) {
        let notFirstCard = cardStorage.filter(card => card.index !== firstCard.index && !card.completed)
        secondCard = notFirstCard[notFirstCard.length * Math.random() | 0]
    }
    turnLogic(firstCard);
    setTimeout(() => turnLogic(secondCard), 700)
    
    
    // canInteractWithGame = true;
}
if (currentPlayer === 1 && enableComputer) {computerTurn()}