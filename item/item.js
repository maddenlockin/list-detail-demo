import { getGame } from '../fetch-utils.js';
import { renderGameDetail } from '../render-utils.js';

const gameDetailContainer = document.getElementById('game-detail-container');

window.addEventListener('load', async () => {
    // get the id from URL
    const params = new URLSearchParams(window.location.search);

    const id = params.get('id');

    // use the id to fetch the game
    const game = await getGame(id);

    // render the game detail
    const gameDetailEl = renderGameDetail(game);
    gameDetailContainer.append(gameDetailEl);
});
