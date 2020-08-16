const express = require('express');
const https = require('https');
const app = express();

app.get('/', (req, res) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Miami,Florida&appid=0b07f5c2bdc7fc94875e0cfb5009d19a';
    https.get(url, (response) => {
        console.log(response.statusCode);

        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            console.log(temp);
            console.log(weatherDescription);
        });
    });
    res.send('Server is up and running.');
})


app.listen(3000, () => {
    console.log('listening on port 3000');
})