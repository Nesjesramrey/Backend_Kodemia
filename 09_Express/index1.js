const express = require("express");
const fs = require("fs/promises");
const { Server } = require("http");

const server = express();
// const app = express();
// const port =3000;

// middleware para convertir request A json
server.use(express.json());

server.get("/koders", async (req, res) => {
  const archivo = await fs.readFile("koders.json", "utf8");
  const objecto = JSON.parse(archivo);
  const koders = objecto.koders;
  res.json(koders);
});

server.post("/koders", async (req, res) => {
  console.log("body:", req.body);

  const koder = req.body;

  const archivo = await fs.readFile("koders.json", "utf8");
  const objecto = JSON.parse(archivo);
  const koders = objecto.koders;

  koders.push(koder);

  // Guardar cambios

  const nuevoArchivo = JSON.stringify(objecto, null, 2); // convertimos el objecto a un string nuevo
  await fs.writeFile("koders.json", nuevoArchivo, "utf8");

  //Enviamos respuesta
  res.status(201); // Estado de creado
  res.json(koders);
});
server.patch("/koders/:nombre", async (req, res) => {
  //Guardamos el nombre del Koder a cambiar
  const nombre = req.params.nombre;

  //Guardamos el koder en una constante
  console.log("body:", req.body);
  console.log(nombre);
  const koder = req.body;

  const archivo = await fs.readFile("koders.json", "utf8");
  const objecto = JSON.parse(archivo);
  const koders = objecto.koders;
  //console.log(koders[0].name)

  // Buscar y actualizar al koder cuyo koder.nombre sea igual a nombre
  if (nombre === koder.name) {
    //console.log('Si es')
    koders.map(function (names) {
      if (names.name == koder.name) {
        names.name = koder.name;
        names.edad = koder.edad;
        names.genero = koder.genero;
      }
    });
  }

  // Guardar cambios

  const nuevoArchivo = JSON.stringify(objecto, null, 2); // convertimos el objecto a un string nuevo
  await fs.writeFile("koders.json", nuevoArchivo, "utf8");

  //Enviamos respuesta
  res.status(201); // Estado de creado
  res.json(koders);
});


server.delete("/koders/:nombre", async (req, res) => {
    //Guardamos el nombre del Koder a cambiar
    const name = req.params.nombre;
  
    //Guardamos el koder en una constante
    const koder = req.body;
    
    //Cargar koders
    const archivo = await fs.readFile("koders.json", "utf8");
    const objecto = JSON.parse(archivo);
    const koders = objecto.koders;
  
    //Voy a eliminar al koder que se llame como la constante nombre
    const newKoders = koders.filter((koder) => koder.name !== name);
    console.log(newKoders);

    const newObject = {
        koders: newKoders,
    };
    
  
    // Guardar cambios
  
    const nuevoArchivo = JSON.stringify(newObject, null, 2); // convertimos el objecto a un string nuevo
    await fs.writeFile("koders.json", nuevoArchivo, "utf8");
  
    //Enviamos respuesta
    res.status(201); // Estado de creado
    res.json(newKoders);
  });



  server.get("/koders/:nombre", async (req, res) => {
    //Guardamos el nombre del Koder a cambiar
    const name = req.params.nombre;
      
    //Cargar koders
    const archivo = await fs.readFile("koders.json", "utf8");
    const objecto = JSON.parse(archivo);
    const koders = objecto.koders;

    const newKoders = koders.filter((koder) => koder.name === name);
    //console.log(newKoders)
  
    //Enviamos respuesta
    res.status(201); // Estado de creado
    res.json(newKoders[0].name);
  });

server.get("/koder", (req, res) => {
  //res.send('Aqui estan todos los koders')
  const respuesta = {
    mensaje: "Aqui estan todos los koders",
  };
  res.json(respuesta);
});

server.post("/koder", (req, res) => {
  const respuesta = {
    mensaje: "Aqui puedes crear koders",
  };

  res.json(respuesta);
});

server.put("/koder", (req, res) => {
  const respuesta = {
    mensaje: "Aqui puedes sustituir un koder",
  };

  res.json(respuesta);
});

server.listen(8000, () => {
  console.log("Servidor ejecutandose");
});
