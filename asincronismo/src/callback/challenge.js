let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 89K (gzipped: 28.1K)
let API ='https://rickandmortyapi.com/api/character/';

function fecthDate(url_api, callback){//hay 5 estados estado 1 = inicializando estado 2 = cargando el proceso de hacer el llamado
                                        //estado 3 = descargando estado 4 = descargado completed.
    let xhttp = new XMLHttpRequest();//peticion con xml. estandar de microsoft
    xhttp.open('GET', url_api, true);//pasamos la peticion es decir GET le pasamos la url y activamos el asincronismo
    xhttp.onreadystatechange = function(event){//si el cambio sucede va  suceder una función.
        if(xhttp.readyState === 4){// '===4' Ha sido completado. se valida si el estado es satisfactorio indica que se ha recibido la información solicitada del servidor
            if(xhttp.status === 200){//ejecutar una sgte llamada grantizar con un 200 que la operación ha sido guardada correctamente
                callback(null, JSON.parse(xhttp.responseText));//el primer valor  el error,  el segundo es el resultado que se desencadena debo parsear porq recibo una respuesta de texto
            }else{
                const error = new error('error', + url_api);
                return callback(error, null)
            }
        }
    }

    xhttp.send();//se envia la solicitud.
}

//Clase 6 múltiples peticiones a un API con callbacks

fecthDate(API, function(error1, data1){
    if(error1)return console.error(error1);
    fecthDate(API + data1.results[0].id, function(error2, data2){
        if(error2) return console.log(error2);
        fecthDate(data2.origin.url, function (error3, data3){
            if(error3) return console.log(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})
