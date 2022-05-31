const http = require("http");
const server = http.createServer((request, response) => {
  const objeto = {
    hola: "Mundo",
  };
  const json = JSON.stringify(objeto);

  //Solo en ruta / hola y en metodo GET
  const method = request.method;
  const url = request.url;

  if (method === "GET" && url === "/hola") {
    response.setHeader("Content-Type", "application/json");
    response.write(json);
  } else if (method === "POST" && url === "/koders") {
    response.statusCode = 201;
    response.write("Aqui puedes crear koders");
  } else {
    response.statusCode = 404;
    response.write("Ruta no encontrada");
  }
  response.end();
});

server.listen(8000, function () {
  console.log("Server corriendo");
});
