

class player{
    constructor(name, piece, color, score, starter){
        this.name = name;
        this.piece = piece;
        this.color = color;
        this.score = score;
        this.starter = starter
    }
}


//Hay que crear los jugadores preguntando por prompt las preferencias y modificando el html en base a eso
//TODO agregar jugadores en html
const player1 = new player()



function createPlayers(){
    let nameLocal = prompt("Ingresa tu nombre")
    let pieceLocal = prompt("Elige tu pieza")
    let colorLocal = prompt("Elige tu color")

    let nameVisitante = prompt("Ingresa tu nombre")
    let pieceVisitante = prompt("Elige tu pieza")
    let colorVisitante = prompt("Elige tu color")

    

    const playerLocal = new player(nameLocal, pieceLocal, colorLocal)
    const playerVisitante = new player(nameVisitante, pieceVisitante, colorVisitante)

    nombreLocal.innerText = playerLocal.name
    nombreVisitante.innerText = playerVisitante.name
    

}

export {player, createPlayers}