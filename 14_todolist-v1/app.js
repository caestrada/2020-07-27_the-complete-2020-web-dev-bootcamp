const express = require('express');
const bodyParser = require('body-parser');
const engines = require('consolidate');
const path = require('path');

const date = require(__dirname + '/date.js');

const app = express()

app.engine('ejs', engines.ejs);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const items = [
  'Buy food',
  'Cook food',
  'Eat food',
];
const workItems = [];

app.get('/', function (req, res) {
 let day = date.getDate();

  res.render('index', {listTitle: day, items});
});

app.post('/', (req, res) => {

  let item = req.body.newItem;

  if (req.body.list === 'Work') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }

});

app.get('/work', (req, res) => {
  res.render('index', {listTitle: 'Work', items: workItems})
})

app.post('/work', (req, res) => {
  workItems.push(req.body.newItem);
  res.redirect('/work');
})

app.get('/about', (req, res) => {
  res.render('about');
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
})