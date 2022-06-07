require("dotenv").config();
const mongoose = require('mongoose');

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST =process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const koderSchema = new mongoose.Schema({
    name: String,
    edad: Number,
    genero: String,
});

const Koder = mongoose.model("koders", koderSchema);


 mongoose.connect(URL)
    .then(async (conection) => {
        console.log('Estamos conectados a nuestra base de datos')


    //     const newKoder = new Koder({
    //         name: "Jose de Anda",
    //         genero: "masculino",
    //         edad: 20,
    //     });
    //    await Koder.create(newKoder);
    //    console.log('registro creado');

    const koders = await Koder.find({edad:20})
    console.log(koders)
    })
    .catch((error) => {
        console.error('No nos conectamos a la base de datos');
        console.error(error);
})


