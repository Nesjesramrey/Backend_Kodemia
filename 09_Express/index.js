const express = require('express' );
const fs = require('fs/promises');
const { Server } = require('http');

const server = express();
// const app = express();
// const port =3000;

// middleware para convertir request A json
server.use(express.json());

server.get('/koders', async (req, res) =>{
    const archivo = await fs.readFile("koders.json", "utf8")
    const objecto = JSON.parse(archivo)
    const koders = objecto.koders;
    res.json(koders)
})

server.post('/koders', async (req, res) => {
    console.log('body:', req.body);

    const koder = req.body;

    const archivo = await fs.readFile("koders.json", "utf8")
    const objecto = JSON.parse(archivo)
    const koders = objecto.koders;

    koders.push(koder)

    // Guardar cambios

    const nuevoArchivo = JSON.stringify(objecto, null, 2) // convertimos el objecto a un string nuevo
    await fs.writeFile("koders.json", nuevoArchivo, "utf8");

    //Enviamos respuesta
    res.status(201) // Estado de creado
    res.json(koders)
})



server.get('/koder', (req, res) => {
    //res.send('Aqui estan todos los koders')
    const respuesta = {
        mensaje: "Aqui estan todos los koders"
    };
    res.json(respuesta);
})

server.post('/koder', (req, res) => {
    const respuesta = {
        mensaje: "Aqui puedes crear koders"
    };

    res.json(respuesta);
})


server.put('/koder', (req, res) => {
    const respuesta = {
        mensaje: "Aqui puedes sustituir un koder"
    };

    res.json(respuesta);
})


server.listen(8000, () => {
    console.log('Servidor ejecutandose')
});