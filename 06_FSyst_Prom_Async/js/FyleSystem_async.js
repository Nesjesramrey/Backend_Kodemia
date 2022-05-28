import {unlink, readFile, writeFile} from "fs/promises"

async function createFile(name, content) {
    try {
        await writeFile(name, content)
        console.log(`Archivo ${name} creado`);
    }   catch (error){
        console.error('No se realizo el archivo');
        console.error(error)
    }
  }
  
// createFile('prueba.txt', 'Hola Koders!')

async function leerArchivo(name){
try {
    const content = await readFile(name, 'utf8');
    console.log(`Archivo ${name} leido`);
    console.log('Contenido de archivo:')
    console.log(content)
}   catch (error){
    console.error('No se pudo  leer archivo');
    console.error(error)
}
} 

//leerArchivo('prueba.tx')


async function borrarArchivo(name){

try {
    await unlink(name)
    console.log(`Archivo ${name} eliminado`);
}   catch (error){
    console.error('No se encontro archivo');
    console.error(error)
}
}

// borrarArchivo('prueba.txt')

async function test() {
    await createFile('prueba.txt', 'Hola Koders!');
    await leerArchivo('prueba.txt');
    await borrarArchivo('prueba.txt')
}

test()


