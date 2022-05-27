// estamos construyendon un muro y hay tres acciones que deben hacerse una despues de la otra

function construir(muro, callback) {
    console.log('construyendo...');

    setTimeout(() =>{
        muro.construido = true;
        callback(muro)
    }, 5000) ;
     // el muro ya fue construido
}

function aplanar(muro, callback) {
    console.log('aplanando...');

    setTimeout(() =>{
        muro.aplanado = true;
        callback(muro)
    }, 3000) ;
   
}

function pintar(muro, callback) {
    console.log('pintando...');

    setTimeout(() =>{
        muro.pintado = true;
        callback(muro)
    }, 2400) ;
    
}

const muro = {
    construido: false,
    aplanado: false,
    pintado: false,
};
// para llamar las funciones sin el callback
// const muroConstruido = construir(muro);
// console.log('Muro construido:', muroConstruido) 

// const muroAplanado = aplanar(muroConstruido);
// console.log('Muro aplanado:', muroAplanado) 

// const muroPintado = pintar(muroAplanado);
// console.log('Muro pintado:', muroPintado) 

//para llamar con callback

construir(muro, (muroConstruido) => {
    aplanar(muroConstruido, (muroAplanado) => {
        pintar(muroAplanado, (muroPintado) => {
            console.log('Muro terminado!', muroPintado)
        })
    }) 
})

