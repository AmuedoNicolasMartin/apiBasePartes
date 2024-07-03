'use strict'
var dotenv = require('dotenv').config();
var modulo = require('./myApp.js');
var bodyParser = require('body-parser');
var path = require('path');
require('./db-connection.js');
var cors = require('cors');
var express = require('express');

var app = express();

modulo.servir(app,express,bodyParser,cors,path);

const listener = app.listen(process.env.PORT || 3000,function(){
    console.log('Node.js is listening on port'+listener.address().port)
});