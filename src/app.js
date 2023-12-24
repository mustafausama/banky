require('express-async-errors');
const express = require('express');

const morganMiddleware = require('./middlewares/morgan');
const NotFoundError = require('./utils/errors/not-found-error');
const errorHandler = require('./middlewares/error-handler');

const app = express();

// This is a built-in middleware function in Express.
app.use(express.json());

app.use(morganMiddleware);

app.use('/api', require('./api'));

app.get('/', (_, res) => {
  res.send('API is running!');
});

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

module.exports = app;
