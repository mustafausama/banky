require('express-async-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const expressListEndpoints = require('express-list-endpoints');
const morganMiddleware = require('./middlewares/morgan');
const NotFoundError = require('./utils/errors/not-found-error');
const errorHandler = require('./middlewares/error-handler');

const app = express();

app.use(cookieParser());

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

const routes = expressListEndpoints(app);
// eslint-disable-next-line no-console
console.log(
  routes
    .map(({ path, methods }) => ({ path, methods }))
    .filter((route) => route.path !== '*')
);

module.exports = app;
