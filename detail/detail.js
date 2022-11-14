import { getGame } from '../fetch-utils.js';

const gameDetailContainer = document.getElementById('game-detail-container');

window.addEventListener('load', async () => {
    // use the id to fetch the item
    const game = await getGame(1);

    // render the game detail
    const gameDetailEl = renderGameDetail(game);
    gameDetailContainer.append(gameDetailEl);
});
