var miNombre;
miNombre = "luis felipe";

//Ejemplo de coerción.

var a = 4 + "7";
document.write("resultado: ",  a);

//ecuacion implicita

var b = 4 * "7";
document.write(" resultado: ",  b);

//ecuacion explicita

var a = 20;
var b = a + "";
document.write(" resultado: ",  b);

//metodo string parar pasar a string sin necesidad de concatenar.
var c = string(a);
console.log("resultado: ", c);


var d = numbers(c);
document.write("resultdo: ",  d);