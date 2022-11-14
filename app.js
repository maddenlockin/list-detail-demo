/* Imports */

import { getAllGames } from './fetch-utils.js';
import { renderGame } from './render-utils.js';

/* Get DOM Elements */
const gamesContainer = document.getElementById('games-container');
/* State */

/* Events */
window.addEventListener('load', async () => {
    // check out clo and see that this is an array! set to var (which is now that array)
    const games = await getAllGames();
    console.log('games', games);
    for (let game of games) {
        const gameEl = renderGame(game);
        console.log('gameEl', gameEl);
        gamesContainer.append(gameEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
