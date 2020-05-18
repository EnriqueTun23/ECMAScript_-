function newFunction(name, age, contry) {
    var name = name || 'kike';
    var age = age || 30;
    var contry =  contry ||  'MX';
    console.log(name, age, contry)
}


// es6 --- ECMAScript 6

// funciones declaradas

function newFunction2(name = 'kike', age = 30, contry = 'MX'){
    console.log(name, age, contry)
}

newFunction2();
newFunction2('enrique', 25, 'YU')

// uso de texto 

let hello = 'Hola';
let world = 'Mundo';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)
// es6
let epicPhrase2 = `${hello} ${world} jajaja`
console.log(epicPhrase2)


//---------------- Multilinea ---------------
let lorem = "asdasdqqweq  asdasdas qweqe   asdae este es un ejemplo del codigo \n"
+ " otra frase epica que necesitamos.";

// es6
let lorem2 = ` otra frase epica que necesitamos 
ahora esta es otra parte de la linea
`;

console.log(lorem)
console.log(lorem2)


//------------------ Desestructuracion --------------

let person = {
    'name': 'Kike',
    'age': 25,
    'country': 'MX'
}

console.log(person.name, person.age)

// es6
let {name, country} = person
console.log(name, country)



// ------------- Spread Operator -------------

let team1 = ['oscar', 'ricardo', 'julian']
let team2 = ['kike', 'rita', 'maria']

// es6
let education = ['David', ...team1, ...team2];

console.log(education)
// ------------- LET ----------------
// es6 agregar let para bloques de codigo y  var para  que sea global en el codigo
{
    var globalVar = "GlobalVar"
}

{
    let globalLet = "GlobalLet"
    console.log(globalLet)
}

console.log(globalVar)

// ------------ CONST ------------
// es6  const sirve para poder no asiganrle es decir su valor es definido
const a = 'b'
a = 'a'



// ---------- paramatros de objetos -----------
let name =  'Kike'
let age = 26

obj = {name: name, age:age}
// es6
obj2 = {name, age}

console.log(obj)
console.log(obj2)


//  ---------------- Arrow Functions ----------------

const names = [
    {name: 'kike', edad: 25},
    {name: 'maria', edad: 18},
    {name: 'yeseña', edad: 24}
]

let listOfnames = names.map(function (item) {
    console.log(item.name)
});

// es6
let listOfnames2 = names.map(item => console.log(item.name));

let listOfnames3 = (name, age) => {
    
}

const listOfnames4 =  name => {

}

const squeare = num => num * num;



// ------------ Promesas ---------------

// es6

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Si se pudo')
        } else {
            reject('nadaa......')
        }
    })
}


helloPromise().then(response => console.log(response)).catch(error => console.log(error))




// ---------- Clases --------


class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB;
    }
}

const calcu = new calculator();

console.log(calcu.sum(15, 10)) 



// ----- modulos ---------
import {hello} from './module';

hello();





// ---------- Generadores  ---------


function *  hellowWord(){
    if(true){
        yield 'Hello,'
    }if(true) {
        yield 'World'
    }
}


const genaratorHEllo = hellowWord();

console.log(genaratorHEllo.next().value)
console.log(genaratorHEllo.next().value)
console.log(genaratorHEllo.next().value)
