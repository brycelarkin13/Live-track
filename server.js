const express = require('express');
const { visitors } = require('./data/visitors');

const app = express();

app.get('/api/visitors', (req, res) => {
    res.send('Test!');
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});