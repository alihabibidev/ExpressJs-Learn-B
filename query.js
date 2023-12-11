const express = require('express');
const queryString = require('querystring');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send(req.query);
});

app.get('/foo', (req, res) => {
    console.log(queryString.parse('key1=value1&key2=value2&key3=value3'));
    console.log(queryString.stringify({
        key1:"value1",
        key2:"value2",
        key3:"value3",
    }));
    res.status(200).send(req.query);
});


app.listen(3000, () => {
    console.log('server run on port 3000');
});
