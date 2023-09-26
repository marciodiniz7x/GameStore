// Seletor de elementos
const imperdiveis = document.querySelector('.imperdiveis');
const incriveis = document.querySelector('.incriveis');

// Iniciar site na página "Home"
function irHome() {
    window.location = 'home.html';
}

// Gerar cards dos jogos
const numGames = 8;

for (let i = 0; i < numGames; i++) {
    const games = document.createElement('div');
    games.classList.add('games');
    imperdiveis.appendChild(games);
    incriveis.appendChild(games);
}