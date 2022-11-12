export function renderGameCard(game) {
    const gameEl = document.createElement('a');
    const nameEl = document.createElement('p');
    const imgEl = document.createElement('img');

    gameEl.classList.add('game-card');
    gameEl.href = `./item/?id=${game.id}`;

    nameEl.textContent = game.name;
    nameEl.classList.add('game-name');

    imgEl.src = game.img;

    gameEl.append(nameEl, imgEl);

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
