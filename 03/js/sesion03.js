/*
  Vamos a crear nuestra propia funcion map
  usando higher-order functions
  La firma de map se verá así:
​
  map(array, callback) => array
*/

/*
  Vamos a recibir un arreglo y un callback
  Vamos a ejecutar el callback a cada elemento del arreglo
  y el resultado lo vamos a guardar en otro arreglo
*/
function map(array, callback) {
  const resultados = [];

  for (let i = 0; i < array.length; i++) {
    const resultado = callback(array[i]);
    resultados.push(resultado)
  }

  return resultados;
}


// Vamos a usar nuestro map

const arreglo = [1, 2, 5, 10, 20];


function negativo(numero) {
  return numero * -1;
}

const resultados = map(arreglo, negativo)
console.log(resultados)

const otrosResultados = map(arreglo, x => x+10)
console.log(otrosResultados)

//**************************************************************** FIND */

let array = [10,1,3,4,5,6]
function find(array, callback){
    for (let index = 0; index < array.length; index++) {
        if(callback(array[index])){
            return array[index]
        }
    }
}

function callback(value){
    if(value %2 === 0 ){
        return true
    }
}

let funcionFind = find(array, callback)
console.log(funcionFind)

//**************************************************************** EVERY*/

const arreglo2 = [1, 2, 5, 2, 11]

function every(array, callback) {
  let newArray =[]
  for (let i = 0; i < array.length; i++) {
   newArray.push(callback(array[i]))
  }
    if(newArray.includes(false)){ 
    return false
  } else{
      return true
    }
  
}


function callback2 (number) {
  return  number < 10; 
  } 

console.log(every(arreglo2, callback2))

