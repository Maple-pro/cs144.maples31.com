const express = require('express');
const {
    PORT,
    HOST
} = require('./config.json');
const app = express();

app.get('/', (req, res) => {
    res.send('root!');
})

app.get('/hello', (req, res) => {
    res.send('hello, cs144!');
});

app.listen(PORT, HOST, () => {
    console.log(`cs144.maples31.com listening at http://${HOST}:${PORT}`);
});