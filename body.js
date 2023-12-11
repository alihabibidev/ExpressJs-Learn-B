const express = require('express');
const queryString = require('querystring');
const app = express();
const posts = require('./posts.json');



// با سه روش میشه دیتا از طریق بادی ارسال کرد
// 1- urlencoded
// 2- formdata (file)
// 3- raw - json

// body parser
app.use(express.json())
app.use(express.urlencoded())


app.get('/', (req, res) => {
    res.status(200).send(req.query);
});


app.post("/body", (req, res) => {
    console.log(req.body);
    res.send(req.body)
})
app.put("/body", (req, res) => {
    console.log(req.body);
    res.send(req.body)
})
app.patch("/body", (req, res) => {
    console.log(req.body);
    res.send(req.body)
})

app.listen(3000, () => {
    console.log('server run on port 3000');
});
