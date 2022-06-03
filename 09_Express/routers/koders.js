const express = require("express");
const fs = require("fs/promises");

const FILENAME = "koders.json";
const ENCODING = "utf8";

const router = express.Router();

router.get("/", async (req, res) => {
  const koders = await readKoders();

  const edad = Number(req.query.edad);
  const count = Number(req.query.count);

  let respuesta = koders;
  console.log("La edad del parametro es:", edad);
  if (!Number.isNaN(edad)) {
    respuesta = koders.filter((koder) => koder.edad === edad);
    console.log("La nueva respuesta es:", respuesta);
  }

  if (!Number.isNaN(count)) {
    console.log("El parametro count:", count);
    respuesta = respuesta.slice(0, count);
    console.log("La nueva respuesta es:", respuesta);
  }

  res.json(respuesta);
});

//** Funcion POST para crear*/
router.post("/", async (req, res) => {
  const koder = req.body;
  console.log(koder)

  const koders = await readKoders();

  koders.push(koder);

  await writeKoders( {koders});

  res.status(201);
  res.json(koders);
});

//** Funcion PATCH para actualizar por nombre */
router.patch("/:nombre", async (req, res) => {
  //Guardamos el nombre del Koder a cambiar
  const nombre = req.params.nombre;
  const koder = req.body;

  const koders = await readKoders();

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
  await writeKoders({koders});
  //Enviamos respuesta
  res.status(201); // Estado de creado
  res.json(koders);
});

//** Funcion DELETE para borrar por nombre */
router.delete("/:nombre", async (req, res) => {
  const name = req.params.nombre;
  const koders = await readKoders();
  const newKoders = koders.filter((koder) => koder.name !== name);
  const newObject = {
    koders: newKoders,
  };

  await writeKoders(newObject);

  res.status(201);
  res.json(newKoders);
});

//** Funcion GET para obtener por nombre */
router.get("/:nombre", async (req, res) => {
  const name = req.params.nombre;

  const koders = await readKoders();

  const newKoders = koders.filter((koder) => koder.name === name);

  res.status(201);
  res.json(newKoders[0].name);
});

async function readKoders() {
  const archivo = await fs.readFile(FILENAME, ENCODING);
  const objecto = JSON.parse(archivo);
  const koders = objecto.koders;

  return koders;
}

async function writeKoders(newObject) {
  const nuevoArchivo = JSON.stringify(newObject, null, 2); // convertimos el objecto a un string nuevo
  await fs.writeFile(FILENAME, nuevoArchivo, ENCODING);
 
}




module.exports = router;
