// const $ = function () {
//     const query = document.querySelectorAll(...arguments);
//     return query.length === 1 ? query[0] : query;
// }

// const score = $("#score"),
//     score2 = $("#score2"),
//     cards = $("#cards");


// const cardStorage = [
//     {
//         name: "label1",
//         element: undefined,
//         imgSrc: "https://cdn.vox-cdn.com/thumbor/ln4IHgPYpvNoIWpJ2Y1_c9msxXA=/0x0:2012x1341/2000x1333/filters:focal(1006x670:1007x671)/cdn.vox-cdn.com/uploads/chorus_asset/file/15483559/google2.0.0.1441125613.jpg"
//     }
// ];



// const addPanel = function (content, name) {
//     const element = cards.appendChild(document.createElement("div"))
//     element.appendChild(content);
//     element.name = name;
// }

// cardStorage.forEach((value, index, array) => {
//     const imgEl = document.createElement("img")
//     imgEl.src = value.imgSrc;
//     array[index].element = addPanel(imgEl, value.name)
// }) 



// cards.children[0].name == cards.children[5].name 
// cards.children[0].classList.add("completed");