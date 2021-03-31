console.log("Here are the rectangle IDs")

const recties = [] = document.getElementsByClassName("recty")

for (let i = 0; i < recties.length; i++) {
  console.log(recties[i].id)
}

const diva = document.getElementById('Red')
diva.addEventListener('click', () => { alert('redy') })