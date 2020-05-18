const data = {
    frontend: 'Manuel',
    backend: 'Luis',
    desing: 'Ana'
}

// como transformar elementos a una matriz
const entries =  Object.entries(data)
console.log(entries)
console.log(entries.length)


const data2 = {
    frontend: 'Manuel',
    backend: 'Luis',
    desing: 'Ana'
}
// convertir un objeto en un narreglo solo con los datos

const values = Object.values(data2);
console.log(values)
console.log(values.length)


//añade a una cadena de caracteres otra en el inicio de la misma
const string = 'hello';
//añade a una cadena de caracteres otra en el inicio de la misma
console.log(string.padStart(8, 'hi '));
//añade a una cadena de caracteres otra al final de la misma de la misma
console.log(string.padEnd(12, '----'));
console.log('food'.padEnd(12, '  ----'));

const obj = {
    name: 'Fran',
}
const helloWord = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('Hellow word'), 3000)
        : reject(new Error('Test error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWord();
    console.log(hello)
}

helloAsync();



const anotherFunction = async () => {
    try {
        const hello = await helloWord();

        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}
anotherFunction();