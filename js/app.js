import { ConfigGame } from "./modal.js"
// Get the modal
const modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const boxes = Array.from(document.getElementsByClassName('box'));
const playText = document.getElementById('playText');
const restartBtn = document.getElementById('restartBtn');
const spaces = [null, null, null, null, null, null, null, null, null];

const GameConfig = {
  player1: null,
  player2: null,
  currentPlayer: null
}


//dibujamos el tablero y agregamos un listener al click de los boxes
const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if (index < 3) {
            styleString += 'border-bottom: 3px solid #0D79EC;';
        }
        if (index % 3 === 0) {
            styleString += 'border-right: 3px solid #0D79EC;';
        }
        if (index % 3 === 2) {
            styleString += 'border-left: 3px solid #0D79EC;';
        }
        if (index > 5) {
            styleString += 'border-top: 3px solid #0D79EC;';
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked)
    });
};


const boxClicked = (e) => {
    const id = e.target.id;
    console.log(id);
    if (!spaces[id]) {
        spaces[id] = GameConfig.currentPlayer.piece;
        e.target.innerText = GameConfig.currentPlayer.piece;

        if (playerHasWon()) {
            playText.innerText = `${GameConfig.currentPlayer.name} has won!`;
            restartBtn.style.visibility = 'visible'
            return;
        }
        GameConfig.currentPlayer = GameConfig.currentPlayer.piece === GameConfig.player1.piece ? GameConfig.player2 : GameConfig.player1;
    }
};

function add1Point(player) {
  player.score = player.score + 1
}

function displayScores() {
  const scoreLocal = document.getElementById('score1')
  const scoreVisitante = document.getElementById('score2')
  scoreLocal.innerText = GameConfig.player1.score
  scoreVisitante.innerText = GameConfig.player2.score
}

function updateScores(winner) {
  add1Point(winner)
  displayScores()
  
}

//verifica si el jugador ganó
const playerHasWon = () => {
    if (spaces[0] === GameConfig.currentPlayer.piece) {
        if (spaces[1] === GameConfig.currentPlayer.piece && spaces[2] === GameConfig.currentPlayer.piece) {
          updateScores(GameConfig.currentPlayer)
            return true;
        }
        if (spaces[3] === GameConfig.currentPlayer.piece && spaces[6] === GameConfig.currentPlayer.piece) {
          updateScores(GameConfig.currentPlayer)
          return true;
        }
        if (spaces[4] === GameConfig.currentPlayer.piece && spaces[8] === GameConfig.currentPlayer.piece) {
          updateScores(GameConfig.currentPlayer)
          return true;
        }
    }
     if (spaces[1] === GameConfig.currentPlayer.piece) {
        if (spaces[4] === GameConfig.currentPlayer.piece && spaces[7] === GameConfig.currentPlayer.piece) {
          updateScores(GameConfig.currentPlayer)
          return true;
        }
    }
    if (spaces[2] === GameConfig.currentPlayer){
        if (spaces[5] === GameConfig.currentPlayer.piece && spaces[8] === GameConfig.currentPlayer.piece) {
          updateScores(GameConfig.currentPlayer)
          return true;
        }
    }
    if (spaces[6] === GameConfig.currentPlayer.piece){
        if (spaces[7] === GameConfig.currentPlayer.piece && spaces[8] === GameConfig.currentPlayer.piece) {
          updateScores(GameConfig.currentPlayer)
          return true;
        }
        if (spaces[4] === GameConfig.currentPlayer.piece && spaces[2] === GameConfig.currentPlayer.piece) {
          updateScores(GameConfig.currentPlayer)
          return true;
        }
    }
    if (spaces[3] === GameConfig.currentPlayer.piece){
        if (spaces[4] === GameConfig.currentPlayer.piece && spaces[5] === GameConfig.currentPlayer.piece) {
          updateScores(GameConfig.currentPlayer)
          return true;
        }
    }
}

//funcionalidad del botón restart
restartBtn.addEventListener('click', () => {
    spaces.forEach((space, index) => {
        spaces[index] = null;
    });
    boxes.forEach((box) => {
        box.innerText = '';
    });
    playText.innerText = `Let's Play!`;
    GameConfig.currentPlayer = StartingPlayer(GameConfig.player1, GameConfig.player2)
})


drawBoard()
ConfigGame()

export { GameConfig }