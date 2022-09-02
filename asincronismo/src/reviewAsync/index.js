// Cuando se llama a una función async, esta devuelve un elemento Promise. 
//Cuando la función async devuelve un valor, Promise se resolverá con el valor devuelto. 
//Si la función async genera una excepción o algún valor, Promise se rechazará con el valor generado.
//Una función async puede contener una expresión await, la cual pausa la ejecución de la función asíncrona y
 //espera la resolución de la Promise pasada y, a continuación, reanuda la ejecución de la función async y 
 //devuelve el valor resuelto.

//La finalidad de las funciones async/await es simplificar 
//el comportamiento del uso síncrono de promesas y realizar algún comportamiento específico
//en un grupo de Promises. Del mismo modo que las Promises son semejantes a las devoluciones de llamadas estructuradas,
//async/await se asemejan a una combinación de generadores y promesas.


function resolveAfter2Seconds(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('aqui estoy');
        },2000)
    });
}


async function asynCall(){
    console.log('estoy esperando');
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asynCall();