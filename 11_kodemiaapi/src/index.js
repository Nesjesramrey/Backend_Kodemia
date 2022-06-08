require("dotenv").config();// las variables del .env se agregan a process.env

const express = require("express");
const mongoose = require('mongoose');

const Koder = require('./models/koder.model')

const PORT = process.env.PORT;


const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST =process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;


const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;


const app = express();
app.use(express.json());

function crearMiddlware(){
  console.log('Creando Middlware');
  return(req, res, next) => {
  console.log('Middlware fabricado');
  console.log('Method', req.method);
  console.log('URL', req.originalUrl);

next();
  };
}


app.use((req, res, next) => {
  console.log('Hola desde este otro middleware');

  next();
})
app.use(crearMiddlware());

app.get('/',(req, res, next) => {
  console.log('En middleware de endpoint')
  res.statusCode = 205;
  next();
} , async (req, res) => {
  res.json({hola:'mundo'});
})

app.get("/koders", async (req, res) => {
    const koders = await Koder.find({})
    res.json(koders);
});


//** Get Query params */
app.get("/koders", async (req, res) => {
    const koders = await Koder.find({});
    //console.log(koders)
  
    const edad = Number(req.query.edad);
    const genero = (req.query.genero);
  
    let respuesta = koders;
    console.log("La edad del parametro es:", edad);
    if (!Number.isNaN(edad)) {
      respuesta = koders.filter((koder) => koder.edad === edad);
      console.log("La nueva respuesta es:", respuesta);
    }
  
    if (genero) {
      console.log("El parametro genero:", genero);
      respuesta = koders.filter((koder) => koder.genero === genero);
      console.log("La nueva respuesta es:", respuesta);
    }
  
    res.json(respuesta);
  });

  //** Funcion POST para crear*/
app.post("/koders", async (req, res) => {
    const koder = req.body;
    console.log(koder)
  
    const koders = await Koder.find({});
  
    koders.push(koder);
  
    await Koder.create(koders);
  
    res.status(201);
    res.json(koders);
  });

//** Funcion PATCH para actualizar por nombre */
app.patch("/koders/:nombre", async (req, res) => {
    //Guardamos el nombre del Koder a cambiar
    const nombre = req.params.nombre;
    const koder = req.body;
  
    const koders = await Koder.find({});
  
    if (nombre === koder.name) {
      koders.map(function (names) {
        if (names.name == koder.name) {
          names.name = koder.name;
          names.edad = koder.edad;
          names.genero = koder.genero;
        }
      });
    }
    // Guardar cambios
    await Koder.create(koders);
    //Enviamos respuesta
    res.status(201); // Estado de creado
    res.json(koders);
  });

mongoose
.connect(URL)
.then(() => {
    console.log('connect to database');

    app.listen(PORT, () => {
        console.log('listening on port', PORT);
    });
})
.catch(err => {
    console.log('error connecting to database', err);
})



