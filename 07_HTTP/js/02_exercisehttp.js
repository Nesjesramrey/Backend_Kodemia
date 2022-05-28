const http = require('http');

//Creamos un servidor usandon creatServer

const server = http.createServer((request, response) => {
    //consultamos la URL de la request
    const URL = request.url
    const method = request.method

    if(URL === '/koder'){
        response.write("Aqui hay un solo Koder")
    } else if(URL === '/koders'){
        response.write("Aqui hay todos los koders")
    } else{
        response.write("No se que hacer aiuda")
    }
    
    
    // Vamos a responder al cliente
     // escribimos la respuesta  
    
    response.end(); // terminamos la respuesta y la enviamos    
})

//Ponemos al servidor a escuchar en un puerto  

server.listen(8080,() => {
    console.log("Servidor iniciado en el puerto 8080");
})