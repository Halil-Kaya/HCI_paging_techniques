"use strict";

var express = require('express');

var expressLayouts = require('express-ejs-layouts');

var path = require('path');

var ejs = require('ejs');

require('./src/db/dbConnection');

var app = express();

var hwRouter = require('./src/routers/hwRouter');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express["static"]('public'));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'src/views'));
app.use('/hw', hwRouter);
app.listen(3000, function () {
  console.log('server is up | port : 3000');
});