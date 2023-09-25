// Seletor de elementos
const main = document.querySelector('.main');

// Iniciar site na página "Home"
function irHome() {
    window.location = 'home.html';
}

// Gerar cards dos jogos
const numGames = 8

for (let i = 0; i < numGames; i++) {
    const game = document.createElement('div');
    game.classList.add('game');
    main.appendChild(game);
    console.log(i);
}

