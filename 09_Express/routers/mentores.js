const express = require("express");
const fs = require("fs/promises");

const FILENAME = "mentores.json";
const ENCODING = "utf8";

const router = express.Router();


//** Funcion GET con queryparameters */
router.get("/", async (req, res) => {
  const mentores = await readMentores();

  const edad = Number(req.query.edad);
  const count = Number(req.query.count);

  let respuesta = mentores;
  console.log("La edad del parametro es:", edad);
  if (!Number.isNaN(edad)) {
    respuesta = mentores.filter((mentor) => mentor.edad === edad);
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
  const mentor = req.body;
  console.log(mentor)

  const mentores = await readMentores();

  mentores.push(mentor);

  await writeMentores( {mentores});

  res.status(201);
  res.json(mentores);
});

//** Funcion PATCH para actualizar por nombre */
router.patch("/:name", async (req, res) => {
  //Guardamos el nombre del Koder a cambiar
  const name = req.params.name;
  const mentor = req.body;

  const mentores = await readMentores();

  if (name === mentor.name) {
    mentores.map(function (names) {
      if (names.name == mentor.name) {
        names.name = mentor.name;
        names.modulo = mentor.modulo;
        names.edad = mentor.edad;
        names.genero = mentor.genero;
      }
    });
  }
  // Guardar cambios
  await writeMentores({mentores});
  //Enviamos respuesta
  res.status(201); // Estado de creado
  res.json(mentores);
});

//** Funcion DELETE para borrar por nombre */
router.delete("/:name", async (req, res) => {
  const name = req.params.name;
  const mentores = await readMentores();
  const newMentores = mentores.filter((mentor) => mentor.name !== name);
  const newObject = {
    mentores: newMentores,
  };

  await writeMentores(newObject);

  res.status(201);
  res.json(newMentores);
});

//** Funcion GET para obtener por nombre */
router.get("/:name", async (req, res) => {
  const name = req.params.name;

  const mentores = await readMentores();

  const newMentores = mentores.filter((mentor) => mentor.name === name);

  res.status(201);
  res.json(newMentores[0].name);
});

async function readMentores() {
  const archivo = await fs.readFile(FILENAME, ENCODING);
  const objecto = JSON.parse(archivo);
  const mentores = objecto.mentores;

  return mentores;
}

async function writeMentores(newObject) {
  const nuevoArchivo = JSON.stringify(newObject, null, 2); // convertimos el objecto a un string nuevo
  await fs.writeFile(FILENAME, nuevoArchivo, ENCODING);
 
}




module.exports = router;