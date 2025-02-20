'use strict'
import usuarioRoutes from './routesUsuario/routesUsuario.js';
var dotenv = require('dotenv').config();
var modulo = require('./myApp.js');
var bodyParser = require('body-parser');
var path = require('path');
require('./db-connection.js');
var cors = require('cors');
var express = require('express');
const methodOverride = require('method-override');
var app = express();
app.use(methodOverride('_method'));

modulo.servir(app,express,bodyParser,cors,path);

app.use('/acounts',usuarioRoutes); //pongo una ruta de inicio '/acounts' para que no entren en conflicto los demas enrutadores.

app.get('/prado/:parametro', (req,res)=>{
    res.json({'El parametro es:': req.params.parametro})
});

const listener = app.listen(process.env.PORT || 3000,function(){
    console.log('Node.js is listening on port'+listener.address().port)
});