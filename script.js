// Seletor de elementos
const imperdiveis = document.querySelector('.imperdiveis');
const incriveis = document.querySelector('.incriveis');

// Iniciar site na página "Home"
function irHome() {
    window.location = 'home.html';
}

// Gerar cards dos jogos
const numImperdiveis = 8;

for (let i = 0; i < numImperdiveis; i++) {
    const game = document.createElement('div');
    game.classList.add('game');
    imperdiveis.appendChild(game);
    console.log(i);
}

const numIncriveis = 8;

