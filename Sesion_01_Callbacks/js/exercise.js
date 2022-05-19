//? Haz una funcion que reciba un arreglo de numeros y retorne el numero mas grande en el arreglo. 
//? Ejemplo [1,2,3,4,5,2] -> 5 Nota no usar: Math.max ni array.prototype.sort
//tit Pseudocodigo 
//tit 1. recorrer el arreglo y comparar elemento por elemento,
//tit 2. si el siguiente elemento es mayor, comparar dicho elemento con el siguiente 
//tit 3 si el elemento es menor comparar con el siguiente,
//tit 4. al llegar al final imprimir el numero

let arrayNumber = [1,2,1,4,5,2]

function numberMax(array){
  
let maximo = 0;
for(let i=0, len = array.length; i < len; i++){
    if(maximo < array[i]){
        maximo = array[i];
    }
}console.log(maximo)
}

numberMax(arrayNumber)


//? Haz una funcion que revierta un string. Ejemplo Hola -> aloH Nota. No usar string.reverse
//tit Pseudocodigo 
//tit 1. podria hacer un splice al string, (aqui era un split, splice para array)
//tit 2. pasarlo a un array
//tit 3. podria hacer un ciclo for por cada elemento. Ademas tuve que ocupar el tostring para volverlo de nuevo string y el replace porque me imprimia las comas

function wordReverse (string){
  let array = string.split('')
  let array2 = []
  // aqui primero defino la variable i del for desde el ultimo elemento del array, para con "--" ir hasta el 0 que se define con el segundo elemento
  for (let i= array.length -1; i>=0; i-- ){
    //console.log(array[i])
    array2.push(array[i])
  }
  //console.log(array2)
    let stringReverse= array2.toString()
    console.log(stringReverse.replace(/,/g,''))
}

wordReverse('Hola')

//? Haz una funcion que divida dos numeros a y b. Si b=0 regresa un mensaje de error. Ejemplo: 10/2 -> 5 6/0 -> 'Error"
//tit Pseudocodigo 
//tit 1. hacer una funcion donde introduzca dos parametros
//tit 2. hacer que returne la division de los dos parametros
//tit 3. que revise la funcion si b es negativo returnar 'error'

const dividir = (a,b) => {
  if (b==0){
   return console.log('Error, no se puede dividir entre 0')
  }else{
   return console.log(a/b)
  }
}

dividir(5,0)