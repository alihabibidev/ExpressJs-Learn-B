const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Accepted : &nbsp' + req.url);
});
app.get('/file.txt', (req, res) => {
    // The point is allowed
    res.status(200).send('Accepted : &nbsp' + req.url);
});

app.get('/ab?cd', (req, res) => {
    // b optional - acd , abcd
    res.status(200).send('Accepted : &nbsp' + req.url + ' - ab?cd');
});
app.get('/ab+cd', (req, res) => {
    // From one to infinity character b - abcd , abbcd, abbbbbbbbcd , . . .
    res.status(200).send('Accepted : &nbsp' + req.url + ' - ab+cd');
});
app.get('/ab*cd', (req, res) => {
    // ab(alphabets | numerics)cd - absdfgsdgcd , ab32fewcd , . . .
    res.status(200).send('Accepted : &nbsp' + req.url + ' - ab*cd');
});
app.get('/ab(cd)?e', (req, res) => {
    // cd optional - abe, abcde
    res.status(200).send('Accepted : &nbsp' + req.url + ' - ab(cd)?e');
});
app.get(/a/, (req, res) => {
    // REGEX
    res.status(200).send('Accepted : &nbsp' + req.url + ' - ab(cd)?e');
});

app.listen(3000, () => {
    console.log('server run on port 3000');
});
