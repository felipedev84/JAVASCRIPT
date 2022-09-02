let nombre = "luis felipe";
function funcionScope()
{
	let apellido = "correa";
	return nombre + "" + apellido;
}

document.write("su nombre es: ",funcionScope())