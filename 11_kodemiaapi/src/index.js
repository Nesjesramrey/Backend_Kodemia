require("dotenv").config();// las variables del .env se agregan a process.env

const express = require("express");
const routerKoders = require("./routers/koder.routers");
const mongoose = require('mongoose');

const server = express();
server.use(express.json());
server.use('/koders', routerKoders);

const PORT = process.env.PORT;


const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST =process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;


const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;




function crearMiddlware(){
  console.log('Creando Middlware');
  return(req, res, next) => {
  console.log('Middlware fabricado');
  console.log('Method', req.method);
  console.log('URL', req.originalUrl);

next();
  };
}


server.use((req, res, next) => {
  console.log('Hola desde este otro middleware');

  next();
})
server.use(crearMiddlware());



mongoose
.connect(URL)
.then(() => {
    console.log('connect to database');

    server.listen(PORT, () => {
        console.log('listening on port', PORT);
    });
})
.catch(err => {
    console.log('error connecting to database', err);
})



