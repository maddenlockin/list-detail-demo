import { getGame } from '../fetch-utils.js';
import { renderGameDetail } from '../render-utils.js';

const gameDetailContainer = document.getElementById('game-detail-container');

window.addEventListener('load', async () => {
    // get the id from URL
    // const params = new URLSearchParams(window.location.search);
    // const id = params.get('id');

    // use the id to fetch the dog
    const game = await getGame(1);
    console.log('game', game);
    // render the game detail
    const gameDetailEl = renderGameDetail(game);
    gameDetailContainer.append(gameDetailEl);
});
