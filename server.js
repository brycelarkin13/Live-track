const express = require('express');
const { visitors } = require('./data/visitors');

const app = express();

app.get('/api/visitors', (req, res) => {

    let results = visitors;

    if (req.query) {

        results = filterByQuery(req.query, results);

    }
    res.json(results);
    //res.send('test');
});

function filterByQuery(query, visitorsArray) {
    let filteredResults = visitorsArray;
    if (query.tractorNumber) {
      filteredResults = filteredResults.filter(visitors => visitors.tractorNumber === query.tractorNumber);
    }
    if (query.carrier) {
      filteredResults = filteredResults.filter(visitors => visitors.carrier === query.carrier);
    }
    if (query.name) {
      filteredResults = filteredResults.filter(visitors => visitors.name === query.name);
    }
    return filteredResults;
  }

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});