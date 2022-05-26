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


//codigo con una variable definida (promiseConstruir)
// const promiseConstruir = construir(muro);
//     promiseConstruir.then((muroConstruido) => {
//         console.log('Muro actualmente:', muroConstruido);
        
//         return aplanar(muroConstruido);
//     })
//     .then((muroAplanado) => {
//         console.log('Muro actualmente', muroAplanado);

//         return pintar(muroAplanado)
//     })
//     .then((muroPintado) => {
//         console.log('Muro actualmente', muroPintado)
//         console.log('Terminamos el muro')
//     })

    construir(muro)
    .then((muroConstruido) => {
        console.log('Muro actualmente:', muroConstruido);
        
        return aplanar(muroConstruido);
    })
    .then((muroAplanado) => {
        console.log('Muro actualmente', muroAplanado);

        return pintar(muroAplanado)
    })
    .then((muroPintado) => {
        console.log('Muro actualmente', muroPintado)
        console.log('Terminamos el muro')
    })