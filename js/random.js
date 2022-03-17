
function sortear(newGame){
    var playerRandom;
    const runMatch = Math.floor(Math.random()* 2 ) + 1; //devuelve 1 o 2
    const playerInnit = document.getElementById('playerInnit');

    if(runMatch === 1){
        playerInnit.innerText = "Inicia el Local";
        playerRandom = true;
    }
    else{
        playerInnit.innerText = "Inicia el Visitante";
        playerRandom = false;
    }

    let modal = document.querySelectorAll(".modal")[0];
    let modalContainer = document.querySelectorAll(".modal-container")[0];
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
    modal.classList.toggle("modal-close");
    iniciarJuego(newGame , playerRandom);
    const starterButton = document.getElementById("starterButton");

}

