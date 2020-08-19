const express = require('express');
const bodyParser = require('body-parser');
const engines = require('consolidate');
const path = require('path');

const app = express()

app.engine('ejs', engines.ejs);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  const today = new Date();
  const currentDay = today.getDay();

  let day = '';
  if (currentDay === 6 || currentDay === 0) {
    day = 'Weekend';
  } else {
    day = 'Weekday';
  }
  switch (currentDay) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
    default:
      console.log('Error: current day is equal to: '+currentDay);
  }

  res.render('index', {day});
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
})