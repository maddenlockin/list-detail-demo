/* Imports */

import { getAllGames } from './fetch-utils.js';
import { renderGameCard } from './render-utils.js';

/* Get DOM Elements */
const gamesContainer = document.querySelector('#games-container');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const games = await getAllGames();
    for (let game of games) {
        const gameEl = renderGameCard(game);
        gamesContainer.append(gameEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
