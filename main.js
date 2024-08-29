const $ = function () {
    const query = document.querySelectorAll(...arguments);
    return query.length === 1 ? query[0] : query;
}
const score = $("#score"),
    score2 = $("#score2"),
    cards = $("#cards");

const addPanel = function (content) {
    return cards.appendChild(document.createElement("div"))
}

