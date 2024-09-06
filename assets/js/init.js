// Zen will do this

/*
Library Documentation:

onePlayerIsSelected - default: false
twoPlayersIsSelected - default: false
addBeginPress(func) - function
enableComputer - default: false;
canInteractWithGame - default: false;
startGame.hide - function
setPlayerTwoText("text") - function
resetGame - function

pressCard.add((cardObject)=> {logic}) - function
flipCard(cardObject) - function
cardObject.completed - boolean - default: false
players - array
flippedCards - array
currentPlayer - 0 or 1

players - object
startGame.modify(player1Score, player2Score, whichPlayerWon = "First Player" | "Second Player" | "Computer") - function
startGame.show
*/



const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

let difficulty = 6;
//randomizes and duplicates selected cards given difficulty
const decideCardStorage = function (difficulty) {

    const cardList = [
        {
            name: "angular",
            imgSrc: "./assets/images/angular.png"
        },
        {
            name: "boostrap",
            imgSrc: "./assets/images/bootstrap.png"
        },
        {
            name: "bulma",
            imgSrc: "./assets/images/bulma.png"
        },
        {
            name: "chrome",
            imgSrc: "./assets/images/chrome.png"
        },
        {
            name: "css3",
            imgSrc: "./assets/images/css3.png"
        },
        {
            name: "html5",
            imgSrc: "./assets/images/html5.png"
        },
        {
            name: "javascript",
            imgSrc: "./assets/images/javascript.png"
        },
        {
            name: "mongodb",
            imgSrc: "./assets/images/mongodb.png"
        },
        {
            name: "mysql",
            imgSrc: "./assets/images/mysql.png"
        },
        {
            name: "node",
            imgSrc: "./assets/images/node.png"
        },
        {
            name: "npm",
            imgSrc: "./assets/images/npm.png"
        },
        {
            name: "react",
            imgSrc: "./assets/images/react.png"
        },
        {//make this a png later
            name: "safari",
            imgSrc: "./assets/images/safari.jpeg"
        },
        {
            name: "tailwindcss.png",
            imgSrc: "./assets/images/tailwindcss.png"
        },
        {
            name: "typescript",
            imgSrc: "./assets/images/typescript.png"
        },
        {
            name: "v8",
            imgSrc: "./assets/images/v8.png"
        },
        {
            name: "vue",
            imgSrc: "./assets/images/vue.png"
        }
        
    ];
    const cardList2 = [];
    for (let i = 0; i < difficulty; i++) {
        let cardListIndex = Math.random()*cardList.length | 0;
        cardList2.push(cardList.splice(cardListIndex, 1)[0])
        cardList2.push(JSON.parse(JSON.stringify(cardList2.at(-1))))
    }
    const cardStorage = [];
    for (let i = 0; i < difficulty*2; i++) {
        let cardListIndex = Math.random()*cardList2.length | 0;
        cardStorage.push(cardList2.splice(cardListIndex, 1)[0])
    }
    return cardStorage;
}
let gameHasBeenPlayed = false;
let cardStorage;
const initCardStorage  = function () {
    cardStorage = decideCardStorage(difficulty);

    //these two things setup the cardObjects in the html and add stuff to the objects themselves
    const addCard = function (content, name) {
        const element = cards.appendChild(document.createElement("div"))
        element.appendChild(content);
        element.name = name;
        return element;
    }

    cardStorage.forEach((value, index, array) => {
        const imgEl = document.createElement("img")
        imgEl.src = value.imgSrc;
        imgEl.alt = value.name;
        array[index].completed = false;
        array[index].index = index;
        array[index].element = addCard(imgEl, value.name)
    }) 
}
initCardStorage();


// onePlayerIsSelected - default: false
// twoPlayersIsSelected - default: false
let onePlayerIsSelected = false;
let twoPlayersIsSelected = false;
(() => {
    $("#one-player").checked = false;
    $("#two-player").checked = false;
    $("#one-player").addEventListener("click", () => (onePlayerIsSelected = $("#one-player").checked, twoPlayersIsSelected = !$("#one-player").checked))
    $("#two-player").addEventListener("click", () => (twoPlayersIsSelected = $("#two-player").checked, onePlayerIsSelected = !$("#two-player").checked))
})()


// onBeginPress = function - default: undefined
let addBeginPress = func => $("#begin").addEventListener("click", func);


// enableComputer - default: false;
let enableComputer = false;

// canInteractWithGame - default: false;
let canInteractWithGame = true;

// startGame.show - function
// startGame.hide - function
// startGame.modify(player1Score, player2Score, whichPlayerWon = "First Player" | "Second Player" | "Computer") - function

// setPlayerTwoText - string
let player2Text = "[Undefined]"
const startGame = {
    show: () => $("#settings-popup").style.display = "block",
    hide: () => $("#settings-popup").style.display = "none",
    modify: (player1Score, player2Score, whichPlayerWon) => {
        const endPlayer1El = $("#endPlayer1")
        const endPlayer2El = $("#endPlayer2")
        const winner = $("#winner")
        const modified = $("#modified")
        modified.style.display = "block";
        endPlayer1El.innerText = `Player 1: ${player1Score}`
        endPlayer2El.innerText = `${player2Text}: ${player2Score}`;
        winner.innerText = `${whichPlayerWon} has Won!`
    }
}


let currentPlayer = Math.random() * 2 | 0;

// players - array

let players;
(() => {
    players = [
        {},
        {}
    ]
    let player1score = 0;
    let player2score = 0;
    Object.defineProperty(players[0], "score", {
        // value: 0,
        set: (value) => (($("#score").innerText = `Player 1 Score: ${value}`), player1score = value),
        get: (value) => player1score
    })
    Object.defineProperty(players[1], "score"  , {
        // value: 0,
        set: (value) => (($("#score2").innerText = `${player2Text} Score: ${value}`), player2score = value),
        get: (value) => player2score
    })
})()
// resetGame - function
const resetGame = () => {
    initCardStorage();
    $("#one-player").checked = false;
    $("#two-player").checked = false;

    //this thing isnt going to be a thing because the function gets run after this modal gets put up
    //startGame.show()
    setPlayerTwoText("[Undefined]");//this is so begin-game.js person doesnt forget to fix this
    currentPlayer =  Math.random() * 2 | 0;
    players[0].score = 0;
    players[1].score = 0;
}
const completed = function (cardObject1, cardObject2) {
    cardObject1.element.classList.add("completed")
    cardObject2.element.classList.add("completed")
}
// pressCard.add((cardObject)=> {logic}) - function
const pressCard = {
    add: function (func) {
        cardStorage.forEach(card => card.element.addEventListener("click", () => canInteractWithGame && !card.completed && func(card)))
    }
}
// flippedCards - array
const flippedCards = [];

// flipCard(cardObject) - function

const flipCard = cardObject => {
    let cardPosition;
    if (!flippedCards.filter((card, i) => card.index === cardObject.index && ((cardPosition = i), true)).length) {//if card isnt flipped
        flippedCards.push(cardObject)
        cardObject.element.classList.add("flipped")
    } else {//if card is flipped
        canInteractWithGame = false;
        setTimeout(()=> {
            
        flippedCards.splice(cardPosition, 1);
        cardObject.element.classList.remove("flipped")
            canInteractWithGame = true;
        }, 700)
    }

}
