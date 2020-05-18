// operadores de reposo

const obj = {
    name: 'kike',
    age: 25,
    contry: 'MX'
};

let {name, ...all} = obj
console.log(name, all)


// propiedades de propagacion 


const obj = {
    name: 'Oscar',
    age: 32
}

const  obj1 = {
    ...obj,
    contry: 'MX'
}
console.log(obj1)


// promise finally saber cuando se acabe una funcion

const helloWord = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hola mundo'), 3000) 
            : reject(new Error('Test'))  
    })
}

helloWord()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'))



// regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-25');
const anio = match[1]
const mes =  match[2]
const dia = match[3]
console.log(anio)
console.log(mes)
