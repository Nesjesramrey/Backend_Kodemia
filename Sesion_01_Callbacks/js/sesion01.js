// Declaracion de la funcion 
// Donde describes lo que hace la funcion, somo se llama y que recibe
function saludar (nombre) {
   return `Hola ${nombre}, saludos`
}
// Invocacion de la funcion(llamar, usar, ejecutar)
// Podemos cambiar el parametro de la funcion con un argumento diferente
console.log(saludar("Nestor")) 

//? se llama la funcion en la terminal "node 'direccion del archivo o el nombre del archivo si estamos en la carpeta'"

//! Arrow function es otra manera de hacer funciones

const saludar2 = (nombre) => {
  return `Hola,${nombre}`
}
console.log(saludar2("Nestor"))



// En este caso nos imprime la funcion ya que al declarar la variable en la funcion no pasamos ningun arg con los ()
const otraFunction = saludar;
console.log(otraFunction)


// al guardar la referencia en function1 y pasar los argumentos si nos retorna lo que pedimos a la funcion
const function1 = saludar;
console.log(function1('Jose'))
console.log(function1('Daniel'))

// el tipo hola es funcion y el tipo saludar ('es el valor de retorno')
console.log(typeof saludar('Oscar'))
console.log(typeof saludar)