var salaryPersons = arraySalary.map(function(persona){
    return persona.salary;
 }
);

var salaryOrder = salaryPersons.sort(function(salaryA, salaryB){
    return salaryA - salaryB;
 }
);


//Después vamos a determinar la mediana del salario de cualquier pais o colombia.
//para esto necesitamos saber si un numero es par o impar por medio de una función.

function numPar (number) {
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}

function calProm (list) {//va a recibir como parámetro un array.
    // var addList = 0;
    // for (var i = 0; i < list.length; i++){
    //     addList = addList + list[i];
    // }

    var addList = list.reduce(//se crea una variable  q almacena la suma de los elementos que entran en el array [list].
                                //con el metodo reduce().
        function (valueAcumulate = 0, newValue){//Encapsular una función.
            return valueAcumulate + newValue;
        }
    );

        var calProm = addList / list.length; //se divide para hallar el promedio el total de ventas o de utilidades personales.
        return calProm;                      //.length es para determinar el tamaño del array es decir 
                                             //el número de elementos que tiene el array.
}   

function mediaSalary (list){
    var mitad = parseInt(list.length / 2);

    if(numPar(list.length)){
        var personSalaryOne = mitad[arraySalary - 1];
        var personSalaryTwo = mitad[arraySalary];

        var medianaSalary = calProm([personSalaryOne, personSalaryTwo]);
        return medianaSalary;
    }else{
        var personMitad = list[mitad];
        return personMitad;
    }
}

var medianaGeneralCol = mediaSalary(salaryOrder);

//mediana del 10%.
var spliceInitial = (salaryOrder.length * 90) / 100;
var spliceEnd = salaryOrder.length - spliceInitial;
var salaryTop10 = salaryOrder.splice(
    spliceInitial,
    spliceEnd,
);

console.log(
    mediaSalary(salaryOrder);
);



