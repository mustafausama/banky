const express = require('express');
require('express-async-errors')

const app = express();

// This is a built-in middleware function in Express.
app.use(express.json());

app.use('/api', require('./api'));

app.get('/', (_, res) => {
    res.send('API is running!');
});

module.exports = app;
