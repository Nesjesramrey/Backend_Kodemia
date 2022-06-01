const express = require('express');
const fs = require('fs/promises');

const server = express();


let jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';
let jsonKoders = {"koders":[{"name":"Nestor","genero":"masculino"},{"name":"Jose","genero":"masculino"},{"name":"Johantan","genero":"masculino"},{"name":"Luis","genero":"masculino"}]};
 
// parse json, this for a json created as a string
let jsonObj = JSON.parse(jsonData);
//console.log(jsonObj);
 
// stringify JSON Object
let jsonContent = JSON.stringify(jsonKoders);
//console.log(jsonContent);
 
fs.writeFile("koders2.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
});


server.get('/koders', async (req, res) =>{
    const archivo = await fs.readFile("koders2.json", "utf8")
    const objecto = JSON.parse(archivo)
    const koders = objecto.koders;
    res.json(koders)
})

server.listen(8001, () => {
    console.log('Servidor ejecutandose')
});


