const boxes = Array.from(document.getElementsByClassName('box'));
const playText = document.getElementById('playText');
const spaces = [null, null, null, null, null, null, null, null, null];
const player1 = 'X';
const player2 = 'O';
let currentPlayer = player1;


//dibujamos el tablero y agregamos un listener al click de los boxes
const drawBoard = () =>{
    boxes.forEach((box, index) =>{
        let styleString = '';
        if (index < 3) {
            styleString += 'border-bottom: 3px solid #0D79EC;';
        }
        if(index % 3 === 0){
            styleString += 'border-right: 3px solid #0D79EC;';
        }
        if(index % 3 === 2){
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
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(playerHasWon()){
            playText.innerText = `${currentPlayer} has won!`;
            return;
        }
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
};

const playerHasWon = () => {
    if(spaces[0] === currentPlayer){
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer){
            console.log(`${currentPlayer} wins up top.`)
            return true;
        }
        if(spaces[3] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} wins on the left.`)
            return true;
        }
    }
}

drawBoard();
