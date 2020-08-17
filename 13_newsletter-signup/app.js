const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/signup.html');
});

app.post('/', (req, res) => {
    const {fnam, lname, email} = req.body;
    console.log(req.body);
    console.log(lname);
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})