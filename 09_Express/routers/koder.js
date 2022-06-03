const express = require('express');

const router = express.Router();


router.get("/", (req, res) => {
    //res.send('Aqui estan todos los koders')
    const respuesta = {
      mensaje: "Aqui estan todos los koders",
    };
    res.json(respuesta);
  });
  
  router.post("/", (req, res) => {
    const respuesta = {
      mensaje: "Aqui puedes crear koders",
    };
  
    res.json(respuesta);
  });
  
  router.put("/", (req, res) => {
    const respuesta = {
      mensaje: "Aqui puedes sustituir un koder",
    };
  
    res.json(respuesta);
  });

  module.exports = router;