function construir(muro) {
    console.log("construyendo...");
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        muro.construido = false;
  
        if (muro.construido !== true) {
          reject(new Error("No se pudo construir el muro"));
        }
        resolve(muro); // el muro fue construido
      }, 2000);
    });
  }
  
  function aplanar(muro) {
    console.log("aplanando...");
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        muro.aplanado = true;
        if (muro.construido !== true || muro.aplanado !== true) {
          reject(new Error("No se pudo aplanar el muro"));
        }
  
        resolve(muro);
      }, 2000);
    });
  }
  
  function pintar(muro) {
    console.log("pintando...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        muro.pintado = true;
        if (
          muro.construido !== true ||
          muro.aplanado !== true ||
          muro.pintado !== true
        ) {
          reject(new Error("No se pudo pintar el muro"));
        }
        resolve(muro);
      }, 2000);
    });
  }
  
  const muro = {
    construido: false,
    aplanado: false,
    pintado: false,
  };

// async function ordenarConstruccion () {
//     const muroConstruido = await construir(muro);
//     const muroAplanado = await aplanar(muroConstruido);
//     const muroPintado = await pintar (muroAplanado);

//     console.log('Se termino el muro', muroPintado);
// }

async function ordenarConstruccion() {
  try{
  await construir(muro);
  await aplanar(muro);
  await pintar(muro);

  console.log("Se termino el muro", muro);
} catch (error) {
    console.log('Otro error!', error);
}
console.log('El programa sigue vivo');
}

ordenarConstruccion();
