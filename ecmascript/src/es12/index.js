//clase 13

const string = "javascript es un lenguaje que me esta interesando ojala sea la papa porque estoy aguantando hambre";
const replaceString = string.replace("javascript","css");//metodo que permite reemplazar un elemento de la cadena de texto.
console.log(replaceString);

// ------------------------------

//Ahora con ecmascript 12.

const string2 = "asdfgfgbgg vfvhnhnhnhmhmnhj";
const replaceString2 = string2.replaceAll("java","python");
console.log(replaceString2);

// ----------------

class message {//estructuras privadas dentro de la clase.
    #show(val){
        console.log(val);
    };
    get #add(val){
        ...
    }
}

const showMessage = new message();
message.show('hola');

//---------------------------

//manejo de promesas
//request=(petición) response=(resolve->resultado=solución).
const promise = new Promise((resolve, reject)=>reject("1"));
const promise2 = new Promise((resolve, reject)=>resolve("2"));
const promise3 = new Promise((resolve, reject)=>resolve("3"));

Promise.any([promise, promise2, promise3]);//Método any()permite recorrer la promesa y resolver la primera que encuentre.
    .then(response=>console.log(response));//Me permite mostrar el resultado de la promesa.

// -------------------------------------


class anyClass{
    constructor( element){
        this.ref = new WeakRef(element)
    }
}
// ---------------------------------

