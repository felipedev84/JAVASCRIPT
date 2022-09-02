
//Clase 7 manejo promesas por validaciones.la promesa tiene un objetivo de q algo va a pasar.
const somethingWillHappen = () =>{
    return new Promise((resolve, reject)=>{//Retorna una nueva promesa es una estructura, pasa dos argumentos si se resulve o es rechazada.
        if(true){//si es verdadero va a resolver
            resolve('hey');//lo hicimos es correcto si la promesa se resuelve.
        }else{//en caso de que no es verdadero va a rechazar.
            reject('ups!');
        }
    });
};

somethingWillHappen()
.then(response => console.log(response))//respuesta que estoy obteniendo lo muestro por consola.
.catch(err => console.error(err));//en caso de fallar se utiliza el catch().

// ----------------------------------------

const somethingWillHappen2 = ()=>{
    return new Promise((resolve, reject)=>{//me garantiza lo que este sucediendo con la promesa.
        if(true){
            setTimeout(()=>{
                resolve('true');
            },2000)
        }else{
            const error = new Error('woops!');
            reject(error);
        }
    });
}

somethingWillHappen2()
.then(response=>console.log(response))
.catch(error => console.error(error));//como vamos a controlar nuestro error.
// -----------------------------

Promise.all([somethingWillHappen(), somethingWillHappen2()])//me permite ejecutar las dos promesas que tengo y retornar un array con las respuestas de ambas
.then(response => {
    console.log('array of results', response);
})

.catch(err => {
    console.error(err);
})
