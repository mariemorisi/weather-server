const express = require('express');
const router = require('./app/routes');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(3000, function () {
  console.log('Listening on port 3000!');
})