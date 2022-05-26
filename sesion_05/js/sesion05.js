const promise = new Promise((resolve, reject) => {
    resolve('Un valor cuando todo salga bien');
    reject('algo salio mal D:');
})

promise
    .then((unValor) => {
        console.log('Resultado:', unValor);
    })
    .catch((unError) => {
        console.log('El error es', unError);
    })