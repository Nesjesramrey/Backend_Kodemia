function retirarDinero (cantidad) {
    return new Promise((resolve, reject) => {
        console.log('Procesando su peticion');
        console.log(`la cantidad a retirar es: ${cantidad}`)

        if (cantidad < 100) {
            reject('Solo puedo darte mas de $100')
        }
        resolve(`$${cantidad}.00`)
    })
}


//console.log(retirarDinero(90))
//si se ejccuta envia el sig error 
// node:internal/process/promises:279
//             triggerUncaughtException(err, true /* fromPromise */);
//             ^

// [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Solo puedo darte mas de $100".] {
//   code: 'ERR_UNHANDLED_REJECTION'
// }

// Promesa de $2000, la cual es exitosa
const promise2000 = retirarDinero(2000)
promise2000
    .then((dinero) => {
        console.log('El cajero me dio:', dinero);
    })
    .catch((error) => {
        console.error('El cajero fallo, el error es', error);
    })

//Promesa de $90, la cual va a fallar
    const promise90 = retirarDinero(90)
promise90
    .then((dinero) => {
        console.log('El cajero me dio:', dinero);
    })
    .catch((error) => {
        console.error('El cajero fallo, el error es', error);
    })

    