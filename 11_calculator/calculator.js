var express = require('express')
const bodyParser = require('body-parser');

var app = express()
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  console.log(':::::', __dirname);
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
  const {num1, num2} = req.body;

  let result = Number(num1) + Number(num2);
  res.send(`Result is: ${result}`);
})
  
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})