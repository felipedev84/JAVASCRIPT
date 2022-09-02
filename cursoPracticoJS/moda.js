var arrayList = [
    1,
    2,
    3,
    4,
    4,
    4,
    5,
    5,
    6,
    7,
    8,
    8,
    9,
    9,
    9
    
];

//Prímero es contar cuantas veces aparece un número en nuestro arreglo.

//para eso se crea el objeto

var objectCount = {};

arrayList.map(
    function (element){
        if(objectCount[element]){
            objectCount[element] += 1;
        }else{
            objectCount[element] = 1;
        }
    }
);

var arrayObject = Object.entries(objectCount).sort(//recibe como argumento una función.permite crear un objecto [[],[],[]]
    function (elementA, elementB){
         return elementA - elementB;
    }
);console.log(arrayObject);

var moda = arrayObject[arrayObject.length - 1];
console.log(moda);
