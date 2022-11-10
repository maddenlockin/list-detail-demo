/* Imports */

import { getGames } from './fetch-utils.js';

/* Get DOM Elements */

/* State */

/* Events */
window.addEventListener('load', async () => {
    await getGames();
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
