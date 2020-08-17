const express = require('express');
// const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/signup.html');
})


app.listen(3000, () => {
    console.log('listening on port 3000');
})