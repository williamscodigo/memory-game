/*
Library Documentation:


//adds things to a gameLoop array that will later be sorted out in main.js for order purposes
gameLoop.add(name_of_function, function)


//this is an array that contains objects denoting player values
players
//the objects it would contain look like this:
{
    score: 0
}



//this is a function that adds an event listener when you click a card
pressCard.add(function (card) {console.log(card.name)})



*/



const $ = function () {
    const query = document.querySelectorAll(...arguments);
    return query.length === 1 ? query[0] : query;
}

const score = $("#score"),
    score2 = $("#score2"),
    cards = $("#cards");


const cardStorage = [
    {
        name: "angular",
        element: undefined,
        imgSrc: "./assets/images/angular.js"
    },
    {
        name: "boostrap",
        element: undefined,
        imgSrc: "./assets/images/bootstrap.js"
    },
    {
        name: "bulma",
        element: undefined,
        imgSrc: "./assets/images/bulma.js"
    },
    {
        name: "chrome",
        element: undefined,
        imgSrc: "./assets/images/chrome.js"
    },
    {
        name: "css3",
        element: undefined,
        imgSrc: "./assets/images/css3.js"
    },
    {
        name: "html5",
        element: undefined,
        imgSrc: "./assets/images/html5.js"
    },
    {
        name: "boostrap",
        element: undefined,
        imgSrc: "./assets/images/bootstrap.js"
    },
    {
        name: "boostrap",
        element: undefined,
        imgSrc: "./assets/images/bootstrap.js"
    },
    {
        name: "boostrap",
        element: undefined,
        imgSrc: "./assets/images/bootstrap.js"
    },
    {
        name: "boostrap",
        element: undefined,
        imgSrc: "./assets/images/bootstrap.js"
    },
    {
        name: "boostrap",
        element: undefined,
        imgSrc: "./assets/images/bootstrap.js"
    },
    {
        name: "boostrap",
        element: undefined,
        imgSrc: "./assets/images/bootstrap.js"
    },
    {
        name: "boostrap",
        element: undefined,
        imgSrc: "./assets/images/bootstrap.js"
    }
];


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