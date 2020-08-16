const express = require('express');
const https = require('https');
const app = express();

app.get('/', (req, res) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Miami,Florida&appid=0b07f5c2bdc7fc94875e0cfb5009d19a&units=imperial';
    https.get(url, (response) => {
        console.log(response.statusCode);

        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            console.log(imageUrl);
            res.write('<p>The weather is currently '+weatherDescription+'</p>');
            res.write('<h1>The temperature in Miami is '+temp+' degress Celcius.</h1>');
            res.write("<img src="+imageUrl+">");
            res.send();
        });
    });
})


app.listen(3000, () => {
    console.log('listening on port 3000');
})