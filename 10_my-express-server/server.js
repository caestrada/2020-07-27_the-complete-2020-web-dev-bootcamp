const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello, world!</h1>');
})

app.get('/contact', function (req, res) {
  res.send('Contact me at: carlos.estrada@piikaaboo.com');
})

app.get('/about', function (req, res) {
  res.send('Hi 👋🏻. My name is Carlos A. Estrada');
})

app.get('/hobbies', function (req, res) {
  res.send('🍺🍺🍺🍺🍺🍺🍺🍺🍺');
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
})