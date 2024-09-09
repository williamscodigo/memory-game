/*
this file should be accomplishing these tasks:

 - when you flip a card the card gets flipped
 if that happens and there are two cards selected that are then the current player gets +1 score and cards remain flipped up with some distinction between old flipped cards and newly flipped cards
 if not both cards get flipped down and it becomes the other players turn (BUT only after a player failed to make a match)

using these functions in the init library:

pressCard.add((cardObject)=> {logic}) - function
flipCard(cardObject) - function
cardObject.completed - boolean - default: false
players - array
flippedCards - array
currentPlayer - 0 or 1
*/
//later when now Zen has the computer ai thing figured out he'll tell you how to implement it here.

pressCard.add((cardObject)=> {
    console.log("test")

    //card press logic
    flipCard(cardObject)
    if(flippedCards.length !== 2) return;

    if(flippedCards[0].name === cardObject.name){
        flippedCards[0].completed = flippedCards[1].completed = true;
        players[currentPlayer].score++;
        completed(flippedCards[0], flippedCards[1])
        if (players[0].score + players[1].score === difficulty) gameHasEnded();
        gameHasBeenPlayed = true;
    }else{
        currentPlayer = +!currentPlayer;
        //change current player - score styles
        $('#score').classList.toggle('current-turn')
        $('#score2').classList.toggle('current-turn');  
    }

    flipCard(flippedCards[1]);
    flipCard(flippedCards[0]);

   
})

 //debugging
//  console.log(cards);
//  cards.addEventListener('click', function(e){
//      const card = e.target;
//      console.log(card);
//  })
