
const express = require('express')
const { setInterval } = require('timers')
const app = express()

// const diva = document.getElementById('Red')
// diva.addEventListener('click', () => { alert('redy') })
// const myTag = document.getElementsByTagName('p')[2]

console.log(myTag)
app.get('/', (req, res) => {
  res.render('dom.html')
})

app.listen('3033', () => {
  console.log('listening on port 3033!')
})

array.forEach(element => {
  element
});

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
  }
}

for (const iterator of object) {

}

setTimeout(() => {
}, 1000);


setTimeout(() => {

}, timeout);

setInterval(() => {

}, interval);
