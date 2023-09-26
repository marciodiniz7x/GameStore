// Seletor de elementos
const main = document.querySelector('.main');
const jogo1 = document.querySelector('.jogo1');

// Iniciar site na página "Home"
function irHome() {
    window.location = 'home.html';
}

// Gerar elementos de Jogo 1
const title = document.createElement('div');
title.classList.add('title');
jogo1.appendChild(title);

const titleText = document.createElement('div');
titleText.classList.add('title-text');
title.appendChild(titleText);

const titleH1 = document.createElement('div');
titleH1.innerHTML = 'IMPERD';

const numGames = 8

for (let i = 0; i < numGames; i++) {
    const game = document.createElement('div');
    game.classList.add('game');
    main.appendChild(game);
    console.log(i);
}