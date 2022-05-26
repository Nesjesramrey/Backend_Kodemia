function construir(muro) {
    console.log('construyendo...');

 return new Promise((resolve, reject) => {
    setTimeout(() =>{
        muro.construido = true;
        resolve(muro)
    }, 2000) ;
 })
    
}

function aplanar(muro) {
    console.log('aplanando...');

    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            muro.aplanado = true;
            resolve(muro)
        }, 2000) ;
    })  
}

function pintar(muro) {
    console.log('pintando...');
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            muro.pintado = true;
            resolve(muro)
        }, 2000) ;
    })    
}

const muro = {
    construido: false,
    aplanado: false,
    pintado: false,
};


async function ordenarConstruccion () {
    const muroConstruido = await construir(muro);
    const muroAplanado = await aplanar(muroConstruido);
    const muroPintado = await pintar (muroAplanado);

    console.log('Se termino el muro', muroPintado);
}

ordenarConstruccion();