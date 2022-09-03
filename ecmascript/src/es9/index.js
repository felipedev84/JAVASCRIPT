//clase 9 lo que se vio en ecmascript 9

//Primero creamos el objeto.

const objeto = {
    name : 'luis felipe',
    age :37,
    country : 'colombia'
};

//vamos a utilizar el separador de elementos

let {name, ...all} = objeto;
console.log(name ,all);//extraigo el elemento del objeto y lo demas lo almaceno en <all>;

//vamos a utilizar las propiedades de propagación podemos unir los objetos que queramos.

const obj = {
    name : 'natalia miranda',
    age: 37,

};

const obj2 = {
    ...obj,//utilizamos el operador de propagación ...obj
    country: 'argentina'
};

console.log(obj2);


//vamos a crear una promesa.

const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (true)//operador ternario.
        ? resolve('hello world')
        : reject(new Error('Test Error'))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(()=> console.log('finalizo'))

//Ejemplo de una mejoras de como agrupar elementos
//Parámetro para determinar la fecha. y estructurar la fecha.

const regexData = /([0-9] {4})-([0-9] {2})-([0-9] {2})/
const match = regexData.exec('2022-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year,month,day);






