const arrayFlat = [1,2,3,[1,2,3,[1,2,3]]];//metodo que permie darle una profundida a nuestro arreglo a un nivel de lectura.
console.log(arrayFlat.flat(3));//valor de la profundidad sobre el metodo flat nos permite devolver una matriz aplanada. y ver como esta estructurado el array.

// -----------------------
let array = [1,2,3,4,5];
console.log(array.flatMap(value => value * 2));

// -------------------------------------

let hello = '       hello world';
console.log(hello);
console.log(hello.trimStart());//Método que permite cortar o quitar espacios de cadenas de texto.

// --------------------------------

let hello = 'hello world      ';
console.log(hello);
console.log(hello.trimEnd());//Método que permite quitar el espacio final de una cadena de texto.


// ---------------------------

try {

}catch(error){
    error
}


//--------------------------------
//Estos métodos son importantes porque podemos pasar un array a objeto ó de un objeto a un array.

let array = [["name", "luis felipe"],["age", 38]];//Object.fromEntries(). Método, que pretende convertir un array en un objeto.
console.log(Object.fromEntries(array));


// -----------------------------------
let objectToArray = {
    name: 'luis felipe',
    age: 38,
    country: 'colombia',
    district:'almendros',
};

console.log(Object.entries(objectToArray));//Object.entries() Método que permite convertir un objeto en un arreglo.
// -----------------------------

let totem = 'womans-best';
let totemFinally = totemFinally(totem);
console.log(totemFinally.description);//Método que permite acceder a nuestro elemento.








