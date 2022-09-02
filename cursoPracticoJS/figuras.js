//codigo del cuadrado.

console.group("cuadrados");

// const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden:"+ladoCuadrado + "cm ");

function ladoCuadrado(lado){
    return lado;
}

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("el perimetro del cuadrado mide "+perimetroCuadrado + "cm ");

//Encapsulando funciones.

function perimetroCuadrado(lado){
    return lado * 4;
}

// const areaCuadrada = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado es:"+areaCuadrada + "cm ");

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//codigo del triangulo

console.group("triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("los lados del triangulo son :" + ladoTriangulo1 + "cm " + ladoTriangulo2 + "cm " + baseTriangulo + "cm ");


// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("el perimetro del triangulo es:" + perimetroTriangulo + "cm");

 function calPerTriEsc(lado1, lado2, base){
     return lado1 + lado2 + base;
 }

// const alturaTriangulo = 5.5;
// console.log("la altura del triangulo es: "+alturaTriangulo);

function alturaTriangulo(altura){
    return altura;
}


// const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
// console.log("la base del triangulo es: " + areaTriangulo + "cm^2");

function calAreaTriEsc(base, altura){
    return (base * altura)/2;
}


console.groupEnd();


//codigo del circulo

console.group("circulo");

//Radio

// const radioCirculo = 4;
// console.log("El radio del circulo es:" + radioCirculo);


function radioCirculo(radio){
    return radio;
}

function radioEsfera(){
    var resCirculo = document.getElementById("resCirculo");
    const inputRadio = document.getElementById("radio");
    const valueRadio = inputRadio.value;
    // const resultadoRadio = radioCirculo(valueRadio);
    resCirculo.innerHTML = "" + valueRadio; 
    alert(valueRadio); 
}


//diametro

// const diametroCirculo =  radioCirculo * 2
// console.log("El diametro del circulo es:" + diametroCirculo + "cm");

function diametroCirculo(radioCirculo){
    return radioCirculo * 2;
}

//PI

const PI = Math.PI;
console.log("PI es:" + PI);

//circunferencia

// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo);

function perimetroCirculo(radioCirculo){
    const diametro = diametroCirculo(radioCirculo);
    return diametro * PI;
}

//Area

// const areaCirculo = (radioCirculo * radioCirculo)* PI;
function areaCirculo(radioCirculo){
    return (radioCirculo * radioCirculo) * PI;
}

console.groupEnd();

//Aqui interactuamos con html.

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function perTriEsc(){
    const lado1 = parseInt(document.getElementById("inputTriEscL1").value);
    const lado2 = parseInt(document.getElementById("inputTriEscL2").value);
    const ladoBase = parseInt(document.getElementById("inputTriB").value);
    const resultado = calPerTriEsc(lado1, lado2, ladoBase);
    alert(resultado);
    alert(lado1 + lado2 + ladoBase);
}

function areaTriEsc(){
    var resEsc = document.getElementById("resEsc");
    const ladoA = parseInt(document.getElementById("inputTriEscL1").value);
    const ladoB = parseInt(document.getElementById("inputTriEscL2").value);
    const ladoBase = parseInt(document.getElementById("inputTriB").value);
    // const resultadoAreaTri = calAreaTriEsc(ladoBase, ladoB);
    var resAreaTri = (ladoBase * ladoB) / 2;
    resEsc.innerHTML = "" + resAreaTri; 
    alert(resAreaTri);
}



function triArea(){
    var areaResultado = document.getElementById("areaResultado");
    var b = parseInt(document.getElementById("inputTriBase").value);
    var h = parseInt(document.getElementById("inputTriAltura").value);
    var area = (b * h) / 2;
    areaResultado.innerHTML = "" + area;
    alert(area);
}

function alturaIsosceles() {
    var resIsosceles = document.getElementById("resIsosceles");
    const inputLadoA = document.getElementById("ladoAIsos");
    const ladoAValue = inputLadoA.value;
    const inputLadoB = document.getElementById("ladoBIsos");
    const ladoBValue = inputLadoB.value;
    const inputLadoBase = document.getElementById("ladoBaseIsos");
    const ladoBaseValue = inputLadoBase.value;
    var alturaIsosceles = Math.sqrt(ladoAValue ** 2 - ladoBaseValue ** 2 / 4);
    resIsosceles.innerText = "Este es el resultado de la altura del triangulo Isosceles" + alturaIsosceles;
}







