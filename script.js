// Seletor de elementos
const main = document.querySelector('.main');

// Iniciar site na página "Home"
function irHome() {
    window.location = 'home.html';
}

// Gerar cards dos jogos
const game = document.createElement('div');
game.classList.add('game');
main.appendChild(game);

for (let i = 0; i < 5; i++) {
    console.log(i);
}
