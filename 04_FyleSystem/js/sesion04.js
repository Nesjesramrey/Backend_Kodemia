const fs = require("fs");
//console.log(fs)


// fs.writefile si no existe el archivo lo crea y si existe lo sobrescribe
// fs.writeFile("hola.txt", "Mi primer archivo", (err) => {
//   if (err) {
//     console.error("Algo salio mal:", err);
//   } else {
//     console.log("Se creo el archivo! :)");
//   }
// });

function createFile(name, content) {
  fs.writeFile(name, content, (err) => {
    if (err) {
      console.error("Algo salio mal:", err);
    } else {
      console.log("Se creo el archivo! :)");
    }
  });
}

createFile("hola.txt", "Mi primer archivo")

//** ReadFile */
function readFile(name) {
    fs.readFile(name, 'utf8', (err, data) => {
      if (err) {
        console.error("No lo pude leer:", err);
      } else {
        console.log("Se leyo el archivo! :) ", data);
      }
    });
  }
  readFile("hola.txt", "utf8")


  //** DeleteFile */
function deleteFile(name) {
    fs.unlink(name, (err) => {
      if (err) {
        console.error("No se encontro:", err);
      } else {
        console.log('Archivo', name, 'eliminado');
      }
    });
  }
  deleteFile("hola.txt")

