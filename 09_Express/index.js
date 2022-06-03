const express = require("express");
const routerKoders = require("./routers/koders");
const routerKoder = require("./routers/koder");
const routerMentores = require("./routers/mentores")

const PORT = 8000;


const server = express();

// middleware para convertir request A json
server.use(express.json());

server.use('/koders', routerKoders);
server.use('/koder', routerKoder);
server.use('/mentores', routerMentores);

server.listen(PORT, () => {
  console.log("Servidor ejecutandose");
});

//? Aqui inicia sesion de Queryparameters
//TODO: Creamos dos funciones que se repiten en nuestro codigo
