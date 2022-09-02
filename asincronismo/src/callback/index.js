// clase 4 callback  
//Se construye una función llamada callback
//callback es una  funcion que se recibe como argumento otra funcion.

function sum(number1, number2){//funcion que hace la tarea principal.
    return number1 + number2;
}

function calc(number1,number2, callback){//funcion callback
    return callback(number1,number2);
}console.log(calc(2,2,sum));//4.se pasa la funcion a mi callback y ejecutarlo.
//script pjson me permite ejecutar los archivos o el codigo que tenemos.

// ----------------------------------


function date(callback){//recibe un callback
    console.log(new Date);//se imprime la fecha de este momento
    setTimeout(function () {//esperar en el tiempo el llamado.
        let date = new Date;// creo la variable para almacenar el objeto.
        callback(date);
    }, 3000)
}


function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);//va a pasarle una funcion como argumento.


// --------------------------
