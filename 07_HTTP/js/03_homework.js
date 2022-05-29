// employees.js
// var faker = require('faker')
// function generateEmployees () {
//   var employees = []
//   for (var id = 0; id < 50; id++) {
//     var firstName = faker.name.firstName()
//     var lastName = faker.name.lastName()
//     var email = faker.internet.email()
//     employees.push({
//       "id": id,
//       "first_name": firstName,
//       "last_name": lastName,
//       "email": email
//     })
//   }
//   return { "employees": employees }
// }
// module.exports = generateEmployees


const http = require('http');

//Creamos un servidor usandon creatServer
const array = {"hola":"mundo"}
const arrayJson = JSON.stringify(array)



const server = http.createServer((request, response) => {
    //consultamos la URL de la request
    const URL = request.url
    const method = request.method

    if(URL === '/saludo'){
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(arrayJson);
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