// flat sirver para poner en una misma linea el codigo de un array que contiene mas arrays
let array = [1, 2, 3, [1, 2, 3, [1,2,3]]]


console.log(array.flat(2))


// flat map sirve para mapear un array en este caso este ejemplo imprimo el valor y el otro lo multiplica por dis
let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value * 2]))


// eliminar espacios de un string 

let hello = '  hola mundos'
console.log(hello)
console.log(hello.trimStart())

// eliminar espacios al final del texto 


let hello2 = 'hola mundo      '
console.log(hello2)
console.log(hello2.trimEnd())


// Ya try catch ya puedes imprimir el error  sin ponerle en el parentesis
try {
    
} catch  {
    error
}

// convertir una matriz o  arreglo en un objeto

let entries = [['name', 'oscar'], ['age', 30]];
console.log(Object.fromEntries(entries));


// objeto de tipo simbolo

let miSimbole = `My symbol`;
let symbol = Symbol(miSimbole);
console.log(symbol.description)