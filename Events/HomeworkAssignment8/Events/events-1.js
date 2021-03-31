const express = require('express')
const ejs = require('ejs')


const app = express()
app.use(express.static(__dirname + '/style/'))
app.use(express.static(__dirname + '/script/'))
app.set('view engine', 'ejs')

app.get('/events', (req, res) => {
  res.render('events')
})

app.listen('3010', () => {
  console.log('server is listening')
})



