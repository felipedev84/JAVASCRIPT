// const precioOriginal = 100; // 100% del precio original 100 dolares.
// const descuento = 15; //descuento del 15%.
// const porcentajePrecioConDescuento = 100 - descuento; //85 dolares 15 dolares seria el descuento.
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento - descuento)/100; 

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function priceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    var resDescuento = document.getElementById("resDescuento");
    resDescuento.innerText = "el resultado con descuento es : " + precioConDescuento;
}

