import { getGame } from '../fetch-utils.js';
import { renderGameDetail } from '../render-utils.js';

const gameDetailContainer = document.getElementById('game-detail-container');

window.addEventListener('load', async () => {
    // create a new URLSearchParams object instance
    const params = new URLSearchParams(window.location.search);
    // window.location.search looks at the current URL after the ?
    // its a read-only Location object and can be treated as a string
    console.log('window.location.search', window.location.search);
    const id = params.get('id');
    console.log('id', id);

    // use the id to fetch the item
    const game = await getGame(id);

    // render the game detail
    const gameDetailEl = renderGameDetail(game);
    gameDetailContainer.append(gameDetailEl);
});
