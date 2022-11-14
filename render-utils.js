export function renderGame(game) {
    const gameEl = document.createElement('a');
    const nameEl = document.createElement('p');
    const imgEl = document.createElement('img');
    const yearEl = document.createElement('p');
    const typeEl = document.createElement('p');

    gameEl.classList.add('game-card');
    // path must match file and folder name for detail page
    gameEl.href = `./detail/?id=${game.id}`;
    nameEl.textContent = game.name;
    nameEl.classList.add('game-name');
    imgEl.src = game.img;
    yearEl.textContent = 'est. ' + game.year_created;
    typeEl.textContent = game.type + ' game';

    gameEl.append(nameEl, imgEl, yearEl, typeEl);

    return gameEl;
}

export function renderGameDetail(game) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const imgEl = document.createElement('img');
    const yearEl = document.createElement('p');
    const typeEl = document.createElement('p');

    div.classList.add('game-detail');

    nameEl.textContent = game.name;
    nameEl.classList.add('game-name');

    imgEl.src = game.img;

    yearEl.textContent = 'est. ' + game.year_created;

    typeEl.textContent = game.type + ' game';

    div.append(nameEl, imgEl, typeEl, yearEl);

    return div;
}
