require("dotenv").config();// las variables del .env se agregan a process.env

const express = require("express");
const mongoose = require('mongoose');

const Koder = require('./koder.model')

const PORT = process.env.PORT;


const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST =process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;


const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;


const app = express();

app.get("/koders", async (req, res) => {
    const koders = await Koder.find({})

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

