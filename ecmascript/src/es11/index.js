const button = document.getElementById('btn');

button.addEventListener("click", async function (){
    const module = await import ("./file.js");
    module.hello();
});


// clase 12 carácteristicas importantes ecmascript 2020.

//Asignación de grandes números.
const bigNumbers = 900719992547400991n;
const bigNumbers2 = BigInt(900719992547400991);

console.log(bigNumbers2);

// ---------------------------------------------------

//promesas
const promise = new Promise((resolve, reject)=> reject("reject"));
const promise2 = new Promise((resolve, reject)=> resolve("resolve"));
const promise3 = new Promise((resolve, reject)=> resolve ("resolve 1"));
Promise.allSettled([promise,promise2,promise3]);
.then(response => console.log(response));

// -----------------------------------------

//valores nulos

const valueNull = null ?? 'default string';
console.log(valueNull);
// --------------------------------------


// acceder a los arreglos y objetos


const user = {};//Creamos un objeto vacio en el llamado de una api vamos a cargar la información.
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('email');
}else{
    console.log('fail');
}



