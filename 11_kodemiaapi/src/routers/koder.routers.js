const express = require("express");
const router = express.Router();

const Koder = require("../usecases/koder.usecase");

router.get("/", async (req, res) => {
    const edad = Number(req.query.edad);
    const genero = req.query.genero;

    const filtro = {};

    const edadExiste = !Number.isNaN(edad)
    if (edadExiste) {
        filtro.edad = edad;
    }

    const generoExiste = genero !== undefined;
    if(generoExiste) {
        filtro.genero = genero;
    }


    const koders = await Koder.getKoders(filtro);

    res.json(koders);
})


router.post("/", async (req, res) => {

    const newKoder = await Koder.createKoders(req.body);

   res.statusCode = 201;
   res.json(newKoder);
})


router.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const koderInfo = req.body;

    const updateKoder = await Koder.updateKoder(id, koderInfo);

    res.json(updateKoder);
})


router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const koderInfo = req.body;

    const deleteKoder = await Koder.deleteKoder(id, koderInfo);

    res.json(deleteKoder);
})

module.exports = router;