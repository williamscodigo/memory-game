/*
UNDERSTANDING init.js

UNDERSTANDING
decideCardStorage - func expression 

sidenote: Array.splice method deletes an element from array and return the deleted element/elements but modifies original array which sometimes is wanted if not use array.toSplice instead or use spread operator trick (array.at method return an arrays element at given index, can use negative numbers -1 is the last item in array -2 is second to last etc)

cardList - is an array defining all available images
cardList2 - (first for-loop) is randomly picking 6 cards from cardList and adding/pushing 1 duplicate next to prev one
cardStorage - (second for-loop) is making sure cards have a random spot/index on cardStorage array (so that we may not have cards next to each other).


UNDERSTANDING 
InitCardStorage - func expression 

cardStorage = decideCardStorage(6) //this line will complete above, so cardStorage is now holding cards that will be used for the game



Note: current == current array iteration in the following
cardStorage.forEach(value: current arrayItem, index: current itemIndex, array: The array forEach() was called upon. In this case cardStorage) this loop do the following:

Creates an img element - using cardStorage object/cards imgSrc and name for actual img element src and alt attributes
Access current object/card and add three new properties completed, index, and element which is a function/method that takes the newly created img element and a name (name value in each card object ex tailwindcss) append this element to ui that includes putting image inside a div and set attribute name to cards name.


UNDERSTANDING 
Anonymous function IIFE (note - any function with no name is anonymous this includes function expressions - the difference is that this function is also a IIFE == Immediately Invoked Function Expression ) - next to onePlayerIsSelected and twoPlayersIsSelected booleans

This function will grab one-player and two-player radio inputs and will assure one of the two is (selected) checked!?


UNDERSTANDING 
startGame - object

show and hide  methods - will show or hide the ui settings-popup!?(Modal probably)
modify method - will grab ui stats section ex players score and winner and modify/update them.


UNDERSTANDING 
second IIFE function - next to let players;

players is an array that holds two objects player1 and player2
Define player1Score player2Score =  0
Assign 'score' property to both player1 and player2 and the value for this property is an objects which have two methods set: which sets the score and get: which gets the score.


UNDERSTANDING 
resetGame - func expression 

Resets the game by first calling initCardStorage - function expression 
Setting scores and check values to default


UNDERSTANDING 
pressCard - object

Have one add: method that will loop over the cards inside cardStorage and for each card it will access the element property (note this holds the actual div with img) and adds a click eventListener to each element, when card is click do the following: 
a) check if card has been completed (boolean) 
&& 
b) call a function and pass in the card TO BE COMPLETED BY DEV TEAM USAGE: pressCard.add((cardObj => {doLogicWithIt})




UNDERSTANDING 
//flippedCards array is defined

flipCard(cardObj) - func expression 

define a cardPosition variable
comments says if(condition) add card to flippedCards array else remove card from flippedCards array.

I don't fully understand the following code:
if(!flippedCards.filter((card, i) => card.index === cardObject.index && ((cardPosition = i), true)).length)

I know the filter array method filters array items returning only the ones that past a condition, the first condition i understand card.index === cardObject.index second part is what i dont understand ((cardPosition = i), true) and it look like you getting the length of the filtered array and negating (!) and that will be the condition of the if statement. 

I NEED HELP WITH THIS PART lol
*/