//para hallar el promedio

// var arrayElements = [
//     100,
//     200,
//     300,
//     400
// ];

  // var addList = 0;
    // for (var i = 0; i < arrayElements.length; i++){
    //     addList = addList + arrayElements[i];--->indica la posicion de cada elemento.
    // }

function calculoPromedio (list) {
  

    var addList = list.reduce(
        function (valueAcumulate = 0, newValue){//Encapsular una función.
            return valueAcumulate + newValue;
        }
    );

    var calProm = addList / list.length;
        return calProm;

}
