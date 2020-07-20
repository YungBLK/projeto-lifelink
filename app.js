const express = require('express');
const path = require('path');
const compression = require('compression');
const moment = require('moment-timezone');
const indexRouter = require('./src/frontend/routes/index');

const app = express();


// view engine setup
app.set('views', path.join(__dirname, './src/frontend/views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

// Global variables
app.locals.site_name = 'Viva - Lifelink';
app.locals.description = 'Viva - Lifelink';

const apiUserRouter = require('./src/backend/routes/user');

app.use('/api/user', apiUserRouter);
app.use('/', indexRouter);

// Catch error 404
app.use((req, res) => {
  res.status(404);
  res.render('error', {
    message: 'Página não encontrada',
    error: {}
  });
});

// Development error handler
if (process.env.NODE_ENV !== 'production') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production error handler
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log('Projeto lIfelink listening at https://%s:%s', host, port);
});

module.exports = app;
