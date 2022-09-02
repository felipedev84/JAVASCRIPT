//Declarativas.

	function miFuncion(num, num2)
		{

			return num + num2;
		}

		document.write("Resultado de la función declarativa->")
		// let totalSuma = suma(5,5)
		document.write(miFuncion(4,6))


// Función expresiva.

let miFuncion2 = function(a,b)
{
	return a + b;
	console.log(miFuncion2);
}

document.write("Resultado de la función expresiva->");
document.write(miFuncion2(3,4));


function saludarEstudiantes(estudiante)
{
	
	return estudiante;
}
document.write("Nombre del estudiante->");
document.write(saludarEstudiantes("luis felipe"));





function saludarEstudiantes(estudiante)
{
	
	return estudiante;

	
}
document.write('hola ${estudiante}');

	
//Otra forma de hacer la funcion suma de un modo mas explicito.
function sumar (a,b)
{
	let resultado = a + b;
	return resultado;
}

document.write(sumar(10,10));









