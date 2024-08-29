const $ = function () {
    const query = document.querySelectorAll(...arguments);
    return query.length === 1 ? query[0] : query;
}

const score = $("#score"),
    score2 = $("#score2"),
    cards = $("#cards");


const cardStorage = [
    {
        name: "label1",
        element: undefined,
        imgSrc: ""
    },
    // {
    //     name: "label2",
    //     element: undefined,
    //     imgSrc: ""
    // },
    // {
    //     name: "label3",
    //     element: undefined,
    //     imgSrc: ""
    // },
    // {
    //     name: "label4",
    //     element: undefined,
    //     imgSrc: ""
    // },
    // {
    //     name: "label5",
    //     element: undefined,
    //     imgSrc: ""
    // },
    // {
    //     name: "label6",
    //     element: undefined,
    //     imgSrc: ""
    // }
];



const addPanel = function (content, name) {
    const element = cards.appendChild(document.createElement("div"))
    element.appendChild(content);
    element.name = name;
}

cardStorage.forEach((value, index, array) => {
    console.log("test")
    const imgEl = document.createElement("img")
    // imgEl.src = value.imgSrc;
    array[index].element = addPanel(imgEl, value.name)
}) 



// cards.children[0].name == cards.children[5].name 
// cards.children[0].classList.add("completed");