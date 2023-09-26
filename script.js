// Seletor de elementos
const imperdiveis = document.querySelector('.imperdiveis');
const incriveis = document.querySelector('.incriveis');
const quentes = document.querySelector('.quentes');

// Iniciar site na página "Home"
function irHome() {
    window.location = 'home.html';
}

// Gerar cards dos jogos
const numGames = 8;
const gamesArray = [];
const games2Array = [];
const games3Array = [];

for (let i = 0; i < numGames; i++) {

    // Gera os elementos e adiciona-os aos gamesArray
    const games = document.createElement('div');
    games.classList.add('games');
    imperdiveis.appendChild(games);
    gamesArray.push(games);
    
    const games2 = games.cloneNode(true);
    incriveis.appendChild(games2);
    games2Array.push(games2)

    const games3 = games.cloneNode(true);
    quentes.appendChild(games3);
    games3Array.push(games3);

}

// Isola elementos específicos do array
for (let i = 0; i <gamesArray.length; i++) {
    const gameDoArray = gamesArray[i];
    gameDoArray.classList.add(`a1-game${i+1}`);
    console.log(gameDoArray);
}


