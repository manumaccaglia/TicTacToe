
function random(newGame){
    var player1;
    const runMatch = Math.floor(Math.random()*2) + 1; //devuelve 1 0 2
    const playerInit = document.getElementById("playerInit");

    if(runMatch === 1){
        playerInit.innerText = "Inicia el Jugador 1";
        player1 = true;
    }else{
        playerInit.innerText = "Inicia el Jugador 2";
        player1 = false;
    }
}