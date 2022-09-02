 function alturaTriangulo(ladoA, ladoB, ladoBase){
     if(ladoA =! ladoB ){
         console.log("los lados a y b son iguales");
    }else{

     }
 }

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase){
    if(trianguloGrandeLadoA =! trianguloGrandeLadoB){
        console.log("los lados a y b no son iguales");
    }else{
        let trianguloPequenoLadoA; //pendiente
        const trianguloGrandeLadoB =trianguloGrandeLadoBase / 2;
        const triangulopequenoLadoBase = trianguloGrandeLadoA;

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase){
    if(trianguloGrandeLadoA=! trianguloGrandeLadoB){
        console.log("los lados a y b no son iguales");
    }else{
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;
        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;
        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);
        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}