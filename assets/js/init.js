/*
Library Documentation:

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
*/



const $ = function () {
    const query = document.querySelectorAll(...arguments);
    return query.length === 1 ? query[0] : query;
}

let difficulty = 6;
const score = $("#score"),
    score2 = $("#score2"),
    cards = $("#cards");
const decideCardStorage = function () {

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
    for (let i = 0; i < 6; i++) {
        let cardListIndex = Math.random()*cardList.length | 0;
        cardList2.push(cardList.splice(cardListIndex, 1)[0])
        cardList2.push(cardList2.at(-1))
    }
    const cardStorage = [];
    for (let i = 0; i < 12; i++) {
        let cardListIndex = Math.random()*cardList2.length | 0;
        cardStorage.push(cardList2.splice(cardListIndex, 1)[0])
    }
    return cardStorage;
}
const cardStorage = decideCardStorage()

const addPanel = function (content, name) {
    const element = cards.appendChild(document.createElement("div"))
    element.appendChild(content);
    element.name = name;
    return element;
}

cardStorage.forEach((value, index, array) => {
    const imgEl = document.createElement("img")
    imgEl.src = value.imgSrc;
    imgEl.alt = value.name;
    array[index].index = index;
    array[index].element = addPanel(imgEl, value.name)
}) 

const gameLoop = {
    loops: [],
    add: function (name, func) {
        this.loops.push({name, func})
    }
};

const players = [
    {
        score: 0
    },
    {
        score: 0
    }
]
const currentPlayer =  Math.random() * 2 | 0;

const pressCard = {
    add: function (func) {
        cardStorage.forEach(card => card.element.addEventListener("click", () => func(card)))
    }
}



const flippedCards = [];
flipCard = function (card) {
    //ui stuff
    card.element.style.opacity = .5;
    flippedCards.push(card)

}

// cards.children[0].name == cards.children[5].name 
// cards.children[0].classList.add("completed");