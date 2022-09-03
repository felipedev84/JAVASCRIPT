function new function(name, age , country) {// yo le paso tres valores name, age, country 
    //Como inicializamos?
    var name = name || "luis felipe";
    var age = age || 32;
    var country = country || "cop";
    console.log(name, age, country); //asi era antes de ecmascript.

}

//Ahora con ecmascript 6

function newFunction (name = "luis felipe",  age = 32, country = "colombia"){
    console.log(name, age, country);
}

//LLamo la función 

newFunction();//me coloca los valores por default que recibio la función.
newFunction("natalia", 28, "argentina");


// --------------

let hello = "hola";
let world = "mundo";

let joinStrings = hello + ' ' + world;
console.log(joinStrings);

//Forma de hacerlo con ecmascript

let newString  =  `${hello} ${world}`;
console.log(newString); 


// -----------------

//Forma de hacerlo sin ecmascript 6.

let phrase = "Estoy aprendiendo de javascript estoy contento por ello.\n"
        + "ojala no pierda la motivación esta tedioso el aprendizaje online";


//Forma de hacerlo con ecmascript 6. 

let phrase2 = `Quiero comprender la forma de como programar, espero seguir 
                aprendiendo por siempre.`;

console.log(phrase);
console.log(phrase2);

// ---------------------

//Forma de construir un objeto sin ecmascript.

let object = {
    name : "luis felipe",
    age : 34,
    country: "colombia"
};

//Como mostrar los objetos.

console.log(object.name, object.age, object.country);

//Forma de hacer un objeto con ecmascript.

let { name, age, country } = object;
console.log(name,age,country);

// --------------------------------

//Forma de hacer un array con ecmascript.
//como agregar elementos a un array con ecmascript.

let team1 = ["luisa", "jessica", "fernanda"];
let team2 = ["mbappe", "messi", "ronaldo"];

let newElement = ["juliana",...team1, ...team2];
console.log(newElement);

//forma de utilizar las variables var y let
{
    var globalVar = "globalVar";
}

{
    let globalLet = "globalLet";
    console.log(globalLet);
}

console.log(globalVar); //asignacion global.

// clase 4 Arow functions parametros a objetos.

// Objetos

let name = "luis felipe";
let edad = 38;

let objeto = {name:name, edad:edad};

let objeto2 = {name, edad};
console.log(objeto2);

// -----------------

// Arrays

const array = [
    {name : "luis felipe", age : 38, country: "colombia"},
];

const listOfNames = array.map(function(item){
    console.log(item.name);
});

// -------------------


//arrows functions

const listOfNames2 = array.map(item => console.log(item.name));

const listOfNames3 = name => {
    ...
}

const listOfName4 = (name, age, country) => {
    ...
}

const square = num => num * num;

//----------Promesas-------------

//Primero se asigna una funcion con arrows functions.

const helloPromise = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('hey');
        }else{
            reject('!ups');
        }
    });
}

helloPromise()
    .then(response => console.log(response));
    .catch(error console.log(error));

// clase 5 modulos y generadores.
class calculateSum {
    constructor (){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(elementA, elementB){
        this.valueA = elementA;
        this.valueB = elementB;

        return this.valueA + this.valueB;
    }
}
const calculoTotal = new calculateSum();
console.log(calculoTotal.sum(3,3));


// ----para importar una función.

import {hello} from './module';

hello();

// ------------------------------


//Generator 

function* helloWorld(){
    if(true){
        yield 'hello, ';
    }

    if(true){
        yield 'world';
    }
    
};

const generatorHello = helloWorld();

console.log(generatorHello.next().value); //el primer valor del if
console.log(generatorHello.next().value); //el segundo valor del segundo if
console.log(generatorHello.next().value); //aparece como resultado undefined.




