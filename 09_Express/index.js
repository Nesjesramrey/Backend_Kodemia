const express = require('express' );

const server = express();
// const app = express();
// const port =3000;
server.get('/', (req, res) => {
    res.send('Hola koders')
})

server.listen(8000, () => {
    console.log('Servidor ejecutandose')
});