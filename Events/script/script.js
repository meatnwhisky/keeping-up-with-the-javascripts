
document.addEventListener('DOMContentLoaded', init)

var board = []
var counter = 0
const playerX = {
  html: '<label style=color:black>X</label>',
  id: 'x'
}
const playerO = {
  html: '<label style=color:red>O</label>',
  id: 'o'
}
var player = playerX

function init() {

  const allTds = document.getElementsByTagName('td')
  for (const td of allTds) {
    td.addEventListener('mousedown', play)
    td.addEventListener('mouseup', checkWinner)
  }
}

function play(e) {
  board[e.target.id] = player.id
  e.target.innerHTML = player.html
  counter++
  e.target.removeEventListener('mousedown', play)

}

function checkWinner() {
  for (let i = 0; i <= 6; i += 3) {
    if (board[i] != undefined && board[i] === board[i + 1] && board[i] === board[i + 2]) {
      alert(`${player.id} is a winner!`)
      location.reload()
      return
      //console.log(`${i} | ${i + 1} | ${i + 2} \n`)
    }
  }

  for (let i = 0; i <= 2; i++) {
    if (board[i] != undefined && board[i] === board[i + 3] && board[i] === board[i + 6]) {
      alert(`${player.id} is a winner!`)
      location.reload()
      return
      //console.log(`${i} | ${i + 3} | ${i + 6} \n`)
    }
  }
  if (counter == 9) {
    alert('cats game!')
    location.reload()
  }
  if (player.id === playerX.id) {
    player = playerO
  }
  else
    player = playerX
}
