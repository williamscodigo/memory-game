const modalHTML = `<section id="modal-container" class="grid justify-center items-center">
        <div id="modal" class="max-w-md border border-gray-500 p-4">
        <form id="modal-form">
                <h2 class="text-2xl font-bold">Memory Game</h2>
          <p>
            Authors: heresjonny117, olescom, zenbladejs and
            williamscodigo
          </p>
          <div id="options">
            <h3 class="mb-4 font-semibold text-gray-900">Choose Game Mode</h3>
            <ul
              class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <li
                class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
              >
                <div class="flex items-center ps-3">
                  <input
                    id="player1-vs-cpu"
                    type="radio"
                    value="player1-vs-cpu"
                    name="list-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="one-player-option"
                    class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Player1 vs CPU</label
                  >
                </div>
              </li>
              <li
                class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
              >
                <div class="flex items-center ps-3">
                  <input
                    id="player1-vs-player2"
                    type="radio"
                    value="player1-vs-player2"
                    name="list-radio"
                    required
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="two-player-option"
                    class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Player1 vs Player2</label
                  >
                </div>
              </li>
            </ul>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Start Game
          </button>
        </form>
    </div>
</section>`;

//variable to hold cards objects / example
const cardsArrays = [
  {
    src: './assets/images/html5.png',
    alt: 'html5 logo'
  },
  {
    src: './assets/images/css3.png',
    alt: 'css3 logo'
  },
  {
    src: './assets/images/javascript.png',
    alt: 'javascript logo'
  },
];

//changing ui / example
let gameHTML = `<section id="game">
        <div id="content">
          <h1>Memory Game</h1>
          <h3 id="score1">Player1 Score</h3>
          <h3 id="score2">Player2 Score</h3>
          <div id="cards-container" class="${tailwindStyles.cardContainer}">
            ${cardsArrays.map(card => `
              <div id="card" class="${tailwindStyles.card}">
                <img src="${card.src}" alt="${card.alt}">
              </div>
            `)}
          </div>
        </div>
</section>`;