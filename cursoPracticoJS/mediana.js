//para hallar el promedio

// var arrayElements = [
//     100,
//     200,
//     300,
//     400
// ];

 // var addList = 0;
    // for (var i = 0; i < arrayElements.length; i++){
    //     addList = addList + arrayElements[i];
    // }

function calculoPromedio (list) {//va a recibir como parámetro un array [....].
   

    var addList = list.reduce(//se crea una variable  q almacena la suma de los elementos que entran en el array [list].
                                //con el método reduce().
        function (valueAcumulate = 0, newValue){//Encapsular una función.
            return valueAcumulate + newValue;
        }
    );

        var calProm = addList / list.length; //se divide para hallar el promedio el total de ventas o de utilidades personales.
        return calProm;                      //.length es para determinar el tamaño del array es decir 
                                             //el número de elementos que tiene el array.
} 

//-----------------------------------||-------------------------------------------------------||-------------------------------------||


var arrayElements = [40, 22, 10, 12];//Despues crea un array de elementos y los ordena con 
arrayElements.sort(function(a,b){//El método sort() organiza los elementos de un arreglo localmente y devuelve
                                 //El arreglo ordenado. me recibe como parámetro una función comparativa siendo a, y b los elementos
                                 //a comparar.
    return a - b; // Ordena los elementos de forma ascendente.
});

console.log(arrayElements);//se necesita crear un array de elementos para poder y aplicar el metodo sort() para poder hallar
// la mitad con los elementos del array ya ordenados de menor a mayor.

var hallarMitad = parseInt(arrayElements.length / 2);//se crea una variable q almacena el array ya ordenado dividido por 2 para
                                                     //hallar la mitad de los elementos.




//-----------------------------------||-------------------------------------------------------||-------------------------------------||

function numberPar (number){
    if(number % 2 === 0) {
        return true;
    }else{
        return false;
    }
}

var media;

if(numberPar(arrayElements.length)) {
    var elementOne = arrayElements[hallarMitad - 1];
    var elementTwo = arrayElements[hallarMitad];
    var resultElementsOneTwo = calculoPromedio([elementOne, elementTwo]);
    media = resultElementsOneTwo;
    
}else{
    media = arrayElements[hallarMitad];
    
}console.log(media);

