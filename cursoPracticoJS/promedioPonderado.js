//Definir el conjunto d numeros junto al peso de cada elemento.
//para esto vamos a crear un array de objetos llamado notes.

var notes = [{
    course: "matematicas",
    note:10,
    credit: 5,
},

{
    course:"fisica",
    note:8,
    credit:4,
},

{
    course:"quimica",
    note:9,
    credit:4,
}
];

//ahora vamos a crear la maquina para sacar promedio ponderados.
//vamos a multiplicar cada numero de la lista por su credito.
//map() metodo para recorrer el array.

var notesWithCredit = notes.map(function(noteObject){
    return noteObject.note * noteObject.credit;
});

//Sumar todos los elementos del array de objetos llamado notes [{}].
//Para esto se usa el método reduce() del array.
//De esta manera se crea una nueva variable para almacenar.


var sumOfNotesWithCredit = notesWithCredit.reduce(function(sum = 0, newVal){
    return sum + newVal;
}

);

//Despues sumar todos los creditos.

//se crea el arrreglo para recorrer todos los elementos con el metodo map()

var credits = notes.map(function (noteObject){
    return noteObject.credit;
});

var sumCredits = credits.reduce(function(sum = 0, newValue){
    return sum + newValue;
});

//Después cogemos la suma de las notas por el credito y se divide poe¡r la suma de los creditos.

var resultPromPonderado = sumOfNotesWithCredit / sumCredits;