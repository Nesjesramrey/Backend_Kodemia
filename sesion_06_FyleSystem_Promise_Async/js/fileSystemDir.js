import { mkdir, readdir, rmdir } from "fs/promises";

 async function createDir(name) {
    try{
        await mkdir (name)
        console.log(`Directorio ${name} creado`)
    } catch (error){
        console.error(`No se pudo crear el directorio ${name}`)
        console.error(error)
    }
}

// createDir('Prueba')

async function readDir(name) {
        try{
            await readdir (name)
            console.log(`Directorio ${name} leido`)
        } catch (error){
            console.error(`No se pudo leer el directorio ${name}`)
            console.error(error)
        }
    }

//     readDir('Prueba')

async function deleteDir(name) {
  try {
    await rmdir(name);
    console.log(`Directorio ${name} borrado`);
  } catch (error) {
    console.error(`No se pudo leer el directorio ${name}`);
    console.error(error);
  }
}

//deleteDir("Prueba");

async function test() {
    await createDir('Carpeta Prueba');
    await readDir('Carpeta Prueba');
    await deleteDir('Carpeta Prueba')
}

test()
