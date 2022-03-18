import { GameConfig } from './app.js'
import { CreatePlayers } from './player.js'

function StartingPlayer(player1, player2) {
  const randomIndex = Math.floor(Math.random() * 2)
  
  return [player1, player2][randomIndex]
}

function NewGame(configObject, player1, player2) {
  const playerLocalName = document.getElementById('nombreLocal')
  const playerVisitanteName = document.getElementById('nombreVisitante')
  const piezaLocal = document.getElementById('pieza1')
  const piezaVisitante = document.getElementById('pieza2')

  configObject.player1 = player1
  configObject.player2 = player2
  configObject.currentPlayer = StartingPlayer(player1, player2)

  playerLocalName.innerText = player1.name
  piezaLocal.innerText = player1.piece

  playerVisitanteName.innerText = player2.name
  piezaVisitante.innerText = player2.piece

} 

function ConfigGame() {
  const form = document.getElementById('player-creation-form')
  const modal = document.getElementById('myModal')



  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const player1Attributes = {
      name: event.target.name1.value,
      piece: event.target.pieza1.value,
      color: event.target.color1.value,
    }

    const player2Attributes = {
      name: event.target.name2.value,
      piece: event.target.pieza2.value,
      color: event.target.color2.value,
    }

    const {playerLocal, playerVisitante} = CreatePlayers(player1Attributes, player2Attributes)

    NewGame(GameConfig, playerLocal, playerVisitante)

    modal.style.display = 'none'


  })
}

export { ConfigGame, StartingPlayer }