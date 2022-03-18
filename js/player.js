class Player {
    constructor(attributes){
        this.name = attributes.name;
        this.piece = attributes.piece;
        this.color = attributes.color;
        this.score = 0;
    }
}


//Hay que crear los jugadores preguntando por prompt las preferencias y modificando el html en base a eso
//TODO agregar jugadores en html



function CreatePlayers(player1Attributes, player2Attributes){
  
  const playerLocal = new Player(player1Attributes)
  const playerVisitante = new Player(player2Attributes)

  return {playerLocal, playerVisitante}
}

export { CreatePlayers }