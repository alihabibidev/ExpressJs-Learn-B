const express = require('express');
const queryString = require('querystring');
const morgan = require('morgan');
// const { default: camelCase } = require('camelcase-keys');
const camelCaseKey = (...args) =>
    import('camelcase-keys').then(({ default: camelCaseKeys }) => camelCaseKeys(...args));
const app = express();

app.use(morgan('combined'));

async function camelCase(req, res, next) {
    req.body = await camelCaseKey(req.body, { deep: true });
    req.query = await camelCaseKey(req.query);
    req.params = await camelCaseKey(req.params);
    next()
}
app.use(camelCase)




// body parser - middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function specialRoute(req, res, next) {
    console.log('special route');
    next();
}
function checkAuth(req, res, next) {
    const { username, password } = req.query;
    if (username == 'erfan' && password == '1234') {
        return next();
    }
    res.send('Authentication is failed');
}

function getTime(req, res, next) {
    req.time = Date.now();
    next();
}
app.use(getTime);

app.use(function (req, res, next) {
    console.log('log1');
    next();
});
app.use(function (req, res, next) {
    console.log('log2');
    next();
});
app.use(function (req, res, next) {
    console.log('log3');
    next();
});
app.use(
    function (req, res, next) {
        console.log('log4');
        next();
    },
    function (req, res, next) {
        console.log('log5');
        next();
    },
    function (req, res, next) {
        console.log('log6');
        next();
    }
);

app.get('/', (req, res, next) => {
    res.status(200).send(req.url);
});
app.get('/users', specialRoute, checkAuth, (req, res, next) => {
    res.status(200).send(req.url);
});

app.get('/blogs', async (req, res) => {
    res.send({
        body: req.body,
        query: req.query,
        params: req.params,
    });
});




app.listen(3000, () => {
    console.log('server run on port 3000');
});
