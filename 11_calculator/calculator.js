var express = require('express')
const bodyParser = require('body-parser');

var app = express()
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
  const {num1, num2} = req.body;

  let result = Number(num1) + Number(num2);
  res.send(`Result is: ${result}`);
})

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmi_calculator.html');
})

app.post('/bmicalculator', (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);


  const bmi = weight / (height * height);
  res.send(`Your BMI is: ${bmi}`);
})
  
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})