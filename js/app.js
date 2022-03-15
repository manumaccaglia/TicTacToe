var player1;
var newGame = false; //la primer partida comienza en false para luego cambiar y darle uso


const randomGame = document.querySelector("#run_game");

randomGame.onclick = function(){
    player1 = random(newGame);
}