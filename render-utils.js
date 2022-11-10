export function renderGameCard(game) {
    const gameEl = document.createElement('a');
    const nameEl = document.createElement('p');
    const imgEl = document.createElement('img');
    const yearEl = document.createElement('p');
    const typeEl = document.createElement('p');

    gameEl.classList.add('game-card');
    gameEl.href = `./games/?id=${game.id}`;
    nameEl.textContent = game.name;
    nameEl.classList.add('game-name');
    imgEl.src = game.img;
    yearEl.textContent = 'est. ' + game.year_created;
    typeEl.textContent = game.type + ' game';

    gameEl.append(nameEl, imgEl, yearEl, typeEl);

    return gameEl;
}
